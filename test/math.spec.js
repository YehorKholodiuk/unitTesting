//const assert = require('assert');
const expect = require('chai').expect
const {sum, allUpper} = require('../index')

describe('SUM',() => {
    it ('calculate sum with positive numbers',() => {
//assert.equal (sum(5,7),12)
        expect(sum(5,7)).equal(12)
    })

    it ('calculate sum with negative numbers',() => {
//assert.equal(sum(-5,-7),-12)
        expect(sum(-5,-7)).equal(-12)
    })
})

describe('ALL UPPER',() => {
    it ('input all lower cases',() => {
//assert.equal (sum(5,7),12)
        expect(allUpper(['a','bc'])).eql(['A','BC'])
    })
    it ('input all upper cases',() => {
//assert.equal (sum(5,7),12)
        expect(allUpper(['A','BC'])).eql(['A','BC'])
    })

})
