import React from 'react'
import './CompCard.css'
const CompCard = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
}) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={imgAlt} className='card-img'/>
      <h2 className='card-title'>{title}</h2>
      <p className='card-description'>{description}</p>
      <a href={link} className='cardbtn'>{buttonText}</a>
    </div>
  )
}
export default CompCard;