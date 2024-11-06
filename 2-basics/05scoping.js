// why not use var?
//all global variables are stored in the global object window
const a = 10
let b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);

if (true) { //blockscope
    const a = 100
let b = 200
var c = 300
}
console.log(a);//10
console.log(b);//20
console.log(c);//300 --> scoping is not happening here for var

//hoisting

incr(2) // returns 3
function incr(num) {
    console.log(++num);    
}


result(2) // gives error
let result = function(num) {
    console.log(--num)
}