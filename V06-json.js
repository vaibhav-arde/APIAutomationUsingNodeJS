var SpiderManBIOJson = {
    name : {
        fname : "Peter",
        lname : "Parkar"
    },
    age : 20,
    superPowers :['superhumanStrength', 'wallCrawling', 'webSlinging'],
    killer : false,
    unknownPower : null
}
console.log(SpiderManBIOJson);
var SpideManStringify = JSON.stringify(SpiderManBIOJson);
console.log(SpideManStringify);
var SpiderManJSON = JSON.parse(SpideManStringify);
console.log(SpiderManJSON);