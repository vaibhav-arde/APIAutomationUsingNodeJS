const mocha = require('mocha');
const should = require('should');

describe('1.test Suite', function(){
    it('1st test case', function(){
        true.should.equal(true);
    })
    it('2nd test case', function(){
        false.should.equal(true);
    })
    it('3rd test case', function(){
        ('Krishna').should.equal('Krishna');
    })
    it('4th test case', function(){
        ('Krishna').should.equal('Rama');
    })
    it('5th test case', function(){
        ('HareKrishna').should.containEql('Krishna');
    })
    it('6th test case', function(){
        ('HareKrishna').should.containEql('Rama');
    })
})