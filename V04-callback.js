//When function is passed as a parameter to a function then it is calle as CallBack function.
function add(num1, num2){
    console.log(`Addition of ${num1} and ${num2} is ${num1+num2}.`);
    return num1 + num2;
}

function square(num){
    console.log(`Square of ${num} is ${num*num}.`);
    return num * num;
}

console.log(`Square of number is : ` + square(add(1,2)));

function sub(num1, num2){
    console.log(`Subtraction of ${num1} from ${num2} gives ${num2-num1}.`);
    return num2 - num1;
}

function calculate(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calculate(2,7,add));
console.log(calculate(2,7,sub));