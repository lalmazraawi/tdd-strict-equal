const describe = require('mocha').describe 

const strictEqual = require ('../strictEqual')


//make a test suite that covers entire file 
const it = require('mocha').it

const expect = require('chai').expect 


//describe a test suite first parameter is a strig second is a function

describe('strictEqual.js test suite', () =>{
  describe ('strictEqual tests', ()=>{
    it ('returns the value number and string', () => {
      const mockData1 = 5
      const mockData2 = '5'
      const expectedResult = false 

      const actualResult = strictEqual(mockData1,mockData2)

      expect(actualResult).to.be.equal(expectedResult)
    

    }
    )
  }
  )

}


)
it ('returns the value of a number and a number', ()=> {
  const mockData1 = 10
  const mockData2 = 10
  const expectedResult = true
  const actualResult = strictEqual (mockData1, mockData2)
   expect(actualResult).to.be.equal(expectedResult)
})
it ('returns string and string', ()=> {
  const mockData1 = "puppies"
  const mockData2 = "puppies"
  const expectedResult = true
  const actualResult = strictEqual (mockData1, mockData2)
   expect(actualResult).to.be.equal(expectedResult)
})

it ('return false if different numbers', ()=> {
  const mockData1 = 100
  const mockData2 = 10
  const expectedResult = false
  const actualResult = strictEqual (mockData1, mockData2)
   expect(actualResult).to.be.equal(expectedResult)
})



