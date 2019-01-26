function one(){
    console.log(`I am 1`);
}
// function two(){
//     console.log(`I am 2`);
// }
function two(){
    setTimeout(function(){
        console.log(`I am 2`);
    }, 4000);    
}
function three(){
    console.log(`I am 3`);
}
function four(){
    one();
    two();
    three();
}
four();