const mocha = require('mocha');
const should = require('should');
const superTest = require('supertest');

let baseUrl = superTest("https://reqres.in/");
let listUserEndPoint = 'api/users?page=1';

it('List User', async function(){
    let res = await baseUrl.get(listUserEndPoint);
    console.log(res.body);
    res.body.page.should.be.a.Number();
    res.body.per_page.should.be.a.Number();
    res.body.total.should.be.a.Number();
    res.body.total_pages.should.be.a.Number();
    res.body.data.should.be.a.Object();
    //console.log(res.body.data.length);
    for(let i=0; i<res.body.data.length; i++){
        res.body.data[i].id.should.be.a.Number();
        res.body.data[i].first_name.should.be.a.String();
        res.body.data[i].last_name.should.be.a.String();
        res.body.data[i].avatar.should.be.a.String();
    }
});
