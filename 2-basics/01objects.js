// two ways to declare objects --> constructor and literal
const obj = {} //literal object type declaration

const user = { 
    name : "debzoti",
    email : "debzoti123@gmail.com",
    "pet name" : "vicky",
    id : 1
}
user.phone = 7602604332 // setting a key value pair key/property is phone and value is the number
// console.log(user);  

// console.log(user.name); // op: debzoti
// console.log(user["pet name"]); // op:  its a dufferent way to access specially for keys whgich have whitespaces you cant acces them with just a . method above

//makeUser function which returns an object
function makeUser(name, age) {
    return {
      name,
       age, // notice you dont need to specify key and value here seperately like (age : age) since both are same
    };
  }
  
  let user2 = makeUser("debzoti", 30);
  let user3 = makeUser("vicky",30)
//   console.log(user2.name);
//   console.log(user3.age);


//how to check a key/propeety exists in an object --> "in" operator

const apple = {
    color : "red",
    type : "fruit",
    quantity : 25,
}

console.log( "color" in apple); // true if color exists in apple object make sure key must be in double quotes

// how to navigate to all the prop and values of an object --> for in loop

const employee = Object.create({name : "debzoti"}) //creates an empty object in constructor mode here name is an inherited property
employee.department = "cs"

for (const key in employee) {
console.log(key, employee[key]);
}
console.log(Object.keys(employee));  // ['department' ] only why becoz for in loop only returns enumareble props not the inherited ones which can be accessed through objects prototype chain
//how to check the prop is inherited or not --> hasOwnProperty method 
console.log(employee.hasOwnProperty('name')); // false
console.log(employee.hasOwnProperty('department')); // true

/*
an example of above concept-->
const animal = { sound: ' generic sound' };
const dog = Object.create(animal);
dog.bark = 'Woof!';
console.log(Object.keys(dog)); // ['bark'] (only enumerable property)
console.log(dog.sound); // ' generic sound' (inherited property)
 */
