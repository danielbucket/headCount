import React, { Component } from 'react';
import { Card } from '../Card/Card';

export default class CompareCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rightCard: 'right card',
      leftCard: 'left card'
    }
  }

  render() {
    return (
      <div>
        <div className='left-card'>
          {/* <Card cardData={ this.state.leftcard } /> */}
        </div>
        <div className='right-card'>
          {/* <Card cardData={ this.state.rightCard } /> */}
        </div>
      </div>
    )
  }

}
