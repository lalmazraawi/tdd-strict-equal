const strictEqual = (mockData1, mockData2) => {
    let result
  
    if (typeof mockData1 == typeof mockData2 && mockData1 == mockData2) {
      result = true
    }
    else {
      result = false
    }
  
    return result
  }
  
  module.exports = strictEqual
