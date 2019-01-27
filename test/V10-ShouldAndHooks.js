const mocha = require('mocha');
const should = require('should');

describe('Test Suite',function(){
    var name;
    before(function(){
        name = 'Krishna';
    })
    afterEach(function(){
        name = "Rama";
    })
    after(function(){
        name = "Hare Krishna";
    })
    it('1st pass',function(){
        name.should.equal('Krishna');
    })
    it('2nd fail', function(){
        name.should.equal('Krishna');//AssertionError: expected 'Rama' to be 'Krishna'
    })
    it('3rd pass', function(){
        name.should.equal('Rama');
    })
    console.log(name);
})