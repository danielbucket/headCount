import React from 'react'
import './Card.css'

const Card  = ({ distInfo, reviewCard }) => {
const distData = Object.keys(distInfo.data).map( cVal => {
  return (
    <div className='dist-info'
          onClick={ () => {
            reviewCard(distInfo)
          } } >
      <p className='dist-year'>{ cVal }</p>
      <p className='dist-data'>{ distInfo.data[cVal] }</p>
    </div>
  )
})

  return (
    <div  className='card-item'>
      <h3 className='dist-location'>{ distInfo.location }</h3>
      <div className='dist-data-container'>{ distData }</div>
    </div>
  )
}

export default Card;
