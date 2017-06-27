class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data)
  }

  cleanData(data) {
    const dataObj = data.reduce( (schoolObj, school) => {
      let { Location, TimeFrame, Data } = school
      const upLocation = Location.toUpperCase()

      isNaN(Data) ? Data = 0.000 : Data = parseFloat(Data.toFixed(3))

      //this was cheated. I stole the code from myself. I am the victim of my own crime.
      if (!schoolObj[upLocation]) {
        schoolObj[upLocation] = {}
        schoolObj[upLocation].location = upLocation
        schoolObj[upLocation].data = {}
      }
      schoolObj[upLocation].data[TimeFrame] = Data

      return schoolObj
    }, {})
    return dataObj
  }

  findByName(inquery = '') {
    if (inquery === '') {
      return undefined
    }

    const upInquery = inquery.toUpperCase()
    const keys = Object.keys(this.data)

    const findSchool = keys.find( schoolKey => {

      return this.data[schoolKey].location === upInquery ? this.data[schoolKey] : null
    })

    return this.data[findSchool]
  }

}

export default DistrictRepository;
