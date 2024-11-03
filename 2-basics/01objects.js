// two ways to declare objects --> constructor and literal
// 
const user = { //literal type
    name : "debzoti",
    email : "debzoti123@gmail.com",
    "pet name" : "vicky",
    id : 1
}
user.phone = 7602604332 // setting a key value pair key/property is phone and value is the number
// console.log(user);  

console.log(user.name); // op: debzoti
console.log(user["pet name"]); // op:  its a dufferent way to access specially for keys whgich have whitespaces you cant acces them with just a . method above

