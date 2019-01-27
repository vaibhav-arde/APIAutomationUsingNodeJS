
const mocha = require('mocha');

describe('Test first Suite',function(){
    before(function(){
        console.log(`This is : before, I execute before all`)
    })
    beforeEach(function(){
        console.log(`This is : beforeEach, I execute before each`)
    })
    after(function(){
        console.log(`This is : after, I execute after all`)
    })
    afterEach(function(){
        console.log(`This is : afterEach, I execute after each`)
    })
    it('My First test case', function(){
        console.log("1. first test case");
    })
    it('My Second test case', function(){
        console.log("2. Second test case");
    })
    it('My Third test case', function(){
        console.log("3. Third test case");
    })
});