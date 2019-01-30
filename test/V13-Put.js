const mocha = require('mocha');
const should = require('should');
const superTest = require('supertest');

let baseUrl = superTest("https://reqres.in/");
let listUserEndPoint = 'api/users?page=1';
let createUserEndPoint = 'api/users';
let updateUserEndPoint = 'api/users';

it.only('Update User', async function(){
    let res = await baseUrl.put(updateUserEndPoint)
        .set('Authorization', '123456')
        .set('Accept', 'application/json')
        .send({
            "Name":"Ram",
            "Responsible" : "The King"
          })
    console.log(res.body);
    res.status.should.equal(200);
    res.body.Name.should.be.a.String();
    res.body.Responsible.should.be.a.String();
    res.body.updatedAt.should.be.a.String();
})

it('Create User', async function(){
    let res = await baseUrl.post(createUserEndPoint)
        .send({
            "Name":"Ram",
            "Responsible" : "King"
        });
    console.log(res.body);
    res.body.Name.should.be.a.String();
    res.body.Responsible.should.be.a.String();
    res.body.id.should.be.a.String();
    res.body.createdAt.should.be.a.String();
})

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
