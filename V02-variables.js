var name ="Krishna";
console.log(name);
name = "Kanha";
console.log(name);
name = false;
console.log(name);
name = 7777;
console.log(name);
//---------------------
const sName ="Rama";
console.log(sName);
//sName ="HareKrishna"; Assignment to constant variable not allowed.
//-----------------------
//console.log(`Values of i is :${i}, before for loop`); // we get an error as i is not defined
for(let i=0; i<3; i++){
    console.log(i);
}
//console.log(`Values of i is :${i}, after for loop`); // we get an error as i is not defined

console.log(`Values of j is :${j}, before for loop`); // value of j is printed as undefined
for(var j=0; j<3; j++){
    console.log(j);
}
console.log(`Values of j is :${j}, after for loop`); // value of j is printed as 3.

//for let we get error where as for var we dont see error , this difference is because of HOISTING.