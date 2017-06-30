import React from 'react';
import Card from '../Card/Card'
import './CardsContainer.css'

const CardsContainer = ({ cardData, reviewCard }) => {
  const cardPrep = Object.keys(cardData).map( cVal => {

    return (
      <div className='card-item-wrapper'>
         <Card  distInfo={ cardData[cVal] }
                reviewCard={ reviewCard } />
      </div>
    )
  })

  return (
    <div className='all-cards'>
      { cardPrep }
    </div>
  )

}

export default CardsContainer;
