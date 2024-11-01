const myName = new String(`debjyoti`) //type object not array
console.log( myName[1]); //acessing each character
const sirName = new String(`sarkar`)
console.log(`hey, i am  ${ myName +" "+sirName} nice to meet you`); // use bacticks for strings is a good pratice
//dive into methods
/*
console.log(myName.__proto__); // output returns a {} --> its not an empty object
console.log(sirName.slice(0,3));// slice string starts with index 0 upto 1(n-1) 
console.log(sirName.slice(-5,3));// it can store negetive values like (-ve,+ve) it starts from opposite side and trim upto second param
console.log(myName.length); //returns length of the string here its 8
console.log(sirName.toUpperCase()); // make string uppercase but not the original value
console.log(myName.charAt(2)); // returns char at index 2
console.log(myName.includes(`d`)); // returns boolean value if a char is present in the string
*/
const txt  = "    lol   "
console.log(txt.trim());  // trimes only white space characters therealso trimstart() and trimend()
