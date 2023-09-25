import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty, removeBooking } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import "./Property.css";
import Map from "../../components/Map/Map";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../../components/BookingModal/BookingModal";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import Heart from "../../components/Heart/Heart";
import UserDetailContext from "../../context/UserDetailContext";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isError, isLoading } = useQuery(["residency", id], () =>
    getProperty(id)
  );
  const [modalOpened, setModalOpened] = useState(false);
  const {validateLogin} = useAuthCheck();
  const {user}= useAuth0()

  const {
    userDetails: { token ,bookings},
    setUserDetails,
  } = useContext(UserDetailContext);
  
  const{mutate:cancelBooking, isLoading:cancelling} = useMutation({
    mutationFn:() => removeBooking(id, user?.email,token),
    onSuccess:()=>{
      setUserDetails((prev) => ({
      ...prev,
      bookings:prev.bookings.filter((booking)=> booking?.id !== id)
      }))
      toast.success("Booking cancelled",{position:("bottom-right")})
    }
  })
  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="paddings flexColStart innerWidth property-container">
        {/**like button */}
        <div className="like">
          <Heart id={id} />
        </div>
        {/**image button */}
        <img src={data?.image} alt="home image" />

        <div className="flexCenter property-details">
          {/**left side */}
          <div className=" flexColStart left">
            {/*head*/}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="goldenText" style={{ fontSize: "1.5rem" }}>
                ${data?.price}
              </span>
            </div>
            {/*facilities*/}
            {/*bathrooms*/}

            <div className="flexStart facilites">
              <div className="flexStart facility">
                <FaShower size={20} color="#f3e3b3" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>
              {/*parking*/}

              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#f3e3b3" />
                <span>{data?.facilities.parkings} Parking</span>
              </div>
              {/*rooms*/}

              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#f3e3b3" />
                <span>{data?.facilities.bedrooms} Room/s</span>
              </div>
            </div>
            {/*description*/}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/*address*/}
            <div className="flexStart">
              <MdLocationPin size={25} style={{ gap: "1rem" }} />
              <span className="secondaryText">
                {data?.address}{" "}
                {data?.city}{" "}
                {data?.country}
              </span>
            </div>
            {/*button*/}

            {bookings?.map((booking) => booking.id).includes(id)?(
              <>
              <Button variant="outline" w={"100%"} color="red" 
              onClick={()=>cancelBooking()} 
              disabled={cancelling}
              > 
                <span>Annuler votre réservation</span>
              </Button>
              <span>
              votre visite est déjà réservée par date{bookings?.filter((booking)=> booking?.id === id)[0].date}
              </span>
              </>
            ) : (
              <button
              className="property-button"
              onClick={() => {
                validateLogin() && setModalOpened(true);
              }}
            >
              Réservez votre visite
            </button>
            )}
            <BookingModal 
             opened={modalOpened}
             setOpened={setModalOpened}
             propertyId={id}
             email={user?.email}
            />
          </div>
          {/**right side */}
          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
