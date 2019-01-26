function add1(a1, a2){
    return a1 + a2;
}
console.log(add1(2,3));

var add2 = function (a1, a2){
    return a1 + a2;
}
console.log(add2(2,3));
//-----------------------------

var name ="Krishna";
console.log(name);
printName();
console.log(name);
printName();
function printName(){
    var name = "Rama";
    console.log(name);
}