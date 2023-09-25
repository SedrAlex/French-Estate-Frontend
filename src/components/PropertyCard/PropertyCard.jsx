import React from 'react'
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import{truncate} from 'lodash'
import { useNavigate } from 'react-router-dom'
import Heart from '../Heart/Heart'

const PropertyCard = ({card}) => {
  const navigate = useNavigate()
  return (
    <div className="flexColStart r-card"
     onClick={() => navigate(`../properties/${card.id}`)}
    >     
     <Heart id={card?.id} />
    <img src={card.image} alt="home" />
    <span className="secondaryText r-price">
      <span style={{ color: "goldenrod" }}>$</span>
      <span>{card.price}</span>
    </span>
    <div className="goldenText ">{truncate(card.title ,{length:15})}</div>
    <div className="secondaryText">{truncate(card.description,{length:80})}</div>

  </div>  )
}

export default PropertyCard