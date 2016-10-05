import chai from 'chai'
import * as helpers from '../js/helpers.js'
const expect = chai.expect

describe('Helper methods', function(){

  describe('#compareColors', function(){
    it('compares two arrays of colors', function(){
      let array1 = ['red', 'blue', 'green', 'pink']
      let array2 = ['red', 'green', 'blue', 'pink']
      let comparedArray = helpers.compareColors(array1, array2)

      expect(comparedArray).to.be.a('array')
      expect(comparedArray).to.deep.equal(['bull', 'cow', 'cow', 'bull'])
    })
  })

  describe('#shuffle', function(){
    it('shuffles an array', function(){
      expect(helpers.shuffle([1,2,3,4])).to.not.equal([1,2,3,4])
    })
  })

  describe('#isOnlyBulls', function(){
    it('returns true if all the elements of an array are bulls', function(){
      let array = ['bull','bull','bull','bull']

      expect(helpers.isOnlyBulls(array)).to.eq(true)
    })

    it('returns false if all the elements of an array are not bulls', function(){
      let array = ['bull','bull','bull','cow']

      expect(helpers.isOnlyBulls(array)).to.eq(false)
    })
  })
})
