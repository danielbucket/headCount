class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data)
  }

  cleanData(data) {
    const dataObj = data.reduce( (schoolObj, school) => {
      let { Location, TimeFrame, Data } = school
      const upLocation = Location.toUpperCase()

      isNaN(Data) ? Data = 0.000 : Data = parseFloat(Data.toFixed(3))

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

  findByName(inquiry = '') {
    if (inquiry === '') {
      return undefined
    }

    const upInquiry = inquiry.toUpperCase()
    const keys = Object.keys(this.data)

    const findSchool = keys.find( schoolKey => {
      return this.data[schoolKey].location === upInquiry ? this.data[schoolKey] : null
    })

    return this.data[findSchool]
  }

  findAllMatches(inquiry = '') {
    const upInquiry = inquiry.toUpperCase()
    const schoolDataKeys = Object.keys(this.data)

    const schoolArr = schoolDataKeys.reduce( (newArr, key) => {
      if (!newArr[this.data[key]]) {
        newArr.push(this.data[key])
      }

      return newArr
    }, [])

    if (!upInquiry) {
      return schoolArr
    }

    const searchResults = schoolArr.reduce( (searchArray, cVal, i) => {
      if (cVal.location === upInquiry) {
        searchArray.push(cVal)
      }

      return searchArray
    }, [])
    return searchResults
  }


}

export default DistrictRepository;
