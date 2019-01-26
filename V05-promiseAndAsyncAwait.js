function one(){
    console.log(`I am 1`);
}
function two(){
    console.log(`I am 2`);
}
function twoC(){
    setTimeout(function(){
        console.log(`I am 2C`);
    }, 4000);    
}
function twoP(){
    return new Promise(function (resolve){
        setTimeout(function(){
            console.log(`I am 2P`);
            resolve("Done!!")
        }, 4000); 
    });
       
}
function three(){
    console.log(`I am 3`);
}
function four(){
    one();
    two();
    twoP().then(function(){
        three();
    });
    twoC();
    
}
four();
console.log(`==========================================================`);
