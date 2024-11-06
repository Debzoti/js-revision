// arrow functions
//this keyword context
const user = {
    name : "debzoti",
    age : 30,
    company : "tcs",
    getDetails : function() { // in regular function this key bound to the object
        console.log(`his name is ${this.name} age is ${this.age} he works on ${this.company}`)
    }
    // getDetails : () => {// in arrow function this keyword is bound to the global object --> tughtly coupled to user object
    //     console.log(`his name is ${this.name} age is ${this.age} he works on ${this.company}`)
    // } //not gonna work on nodejs enviorment bcoz global object of nodejs is {}
}

user.getDetails()
console.log();
//In JavaScript, the this keyword refers to the context of the function. In the case of an arrow function, the this keyword is bound to the context of the surrounding scope, not the object itself --> lexical scope

function userName(){
    let name ="debzoti"
    console.log(this.name);
}
userName() // undefined
// note --> this keyword doesnot work in standalone functions of any type like arrow etc so preferred to use this in under objects.


//arrow function examples
const add = (num1, num2) => num1 + num2 
//returning an object
const addNum = (num1, num2) => ({num1, num2})
console.log(addNum(2,5)); // { num1: 2, num2: 5 }


