import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './DistrictRepository';
import highSchoolGradData from '../data/high_school_graduation_rates'

const schoolData = new DistrictRepository(highSchoolGradData)

// const testLog = schoolData.findByName('Academy 20')
// const testLog = schoolData.findByName('Colorado')
const testLog = schoolData.findAllMatches('colorado')

console.log('testLog :', testLog)

class App extends Component {
  constructor() {
    super()
    this.state = {
      district: ''
    }
  }


  render() {
    return (
      <div>Welcome To Headcount 2.poop</div>
    )
  }
}

export default App;
