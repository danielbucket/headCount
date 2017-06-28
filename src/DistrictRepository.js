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

    const findSchool = Object.keys(this.data).find( schoolKey => {
      return this.data[schoolKey].location === upInquiry ? this.data[schoolKey] : null
    })

    return this.data[findSchool]
  }

  findAllMatches(inquiry = '') {
    const upInquiry = inquiry.toUpperCase()

    const schoolArr = Object.keys(this.data).reduce( (newArr, key) => {
      if (!newArr[this.data[key]]) {
        newArr.push(this.data[key])
      }

      return newArr
    }, [])

    if (!upInquiry) {
      return schoolArr
    }

    const searchResults = schoolArr.reduce( (twoShits, cVal) => {
      if (cVal.location === upInquiry) {
        twoShits.push(cVal)
      }

      return twoShits
    }, [])
    return searchResults
  }

  findAverage(search) {
    const searchResult = this.findByName(search)
    const s1Keys = Object.keys(searchResult.data)
    let num = 0

    const s1Average = s1Keys.forEach( a => {
      return num = num + searchResult.data[a]
    })

    return parseFloat((num/s1Keys.length).toFixed(3))
  }

  compareDistrictAverages(search1, search2) {
    const s1 = this.findByName(search1)
    const s2 = this.findByName(search2)

    const s1Average = this.findAverage(s1.location)
    const s2Average = this.findAverage(s2.location)

    return {  [s1.location]: s1Average,
              [s2.location]: s2Average,
              compared: parseFloat(((s1Average+s2Average)/2).toFixed(3))
            }
  }
}

export default DistrictRepository;
