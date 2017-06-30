import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './DistrictRepository';
import highSchoolGradData from '../data/high_school_graduation_rates';
import CompareCards from './CompareCards/CompareCards';


import CardsContainer from './CardsContainer/CardsContainer';

const schoolData = new DistrictRepository(highSchoolGradData)

class App extends Component {
  constructor() {
    super()
    this.state = {
      district: schoolData.data,
      compareCards: {
        leftCard: '',
        leftStatus: false,
        rightCard: '',
        rightStatus: false
      },
      compareCardsLength: 0
    }
    this.reviewCard = this.reviewCard.bind(this)
  }

  reviewCard(e) {
    const cardState = this.state.compareCards
    if (cardState.leftStatus === false) {
      console.log(this.state)
      this.setState({

      })
    }

    // console.log('card data :', this.state
  }

  render() {
    return (
      <div className='body'>
        <header>
          Welcome To Headcount two(point)zero
        </header>
        <div className='compare-cards-box'>
          <CompareCards />
        </div>
        <div className='card-box'>
          <CardsContainer cardData={ schoolData.data }
                          reviewCard={ this.reviewCard } />
        </div>
      </div>
    )
  }
}

export default App;
