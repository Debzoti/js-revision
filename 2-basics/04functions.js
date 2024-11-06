// function declaration amd definition
function add(a,b){
    return a+b //returning the value
}

add(2,3) // this is function call reference
let result = add(2,3) //calling and storing the result
console.log(result)


function loggedIN(name) {
    if (!name) {
         console.log(`enter a valid username`);
         return 0
    }  
    return `${name} logged in`  
}
console.log(loggedIN(''));
console.log(loggedIN('debzoti'));


//taking input using rest operator in function

function addNum(num1,num2,...nums) {
    return 
}
console.log(addNum(1,2)); //return [] coz 1,2 is taken by num1 and num2
console.log(addNum(1,25,5,23,23)); //return [5,23,23] how rest operator works


//passing object in a function

const user ={
    name : "debzoti",
    age : 30,
    company : "tcs"
}
function userData(dataObject) {
    return ` his name is ${dataObject.name} age is ${dataObject.age} he works on ${dataObject.company}`
}
console.log(userData(user));
console.log(userData({name : "vicky", age : 32, company : "infosys"}));


//scoping
