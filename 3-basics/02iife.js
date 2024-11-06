//immediately invoked function expression

//named iife
(function() {
    console.log("iife");
})(); // -->  ";" is important here becoz it will not execute the latter iife function if we remove it

//using arrow function unnamed iffe
((name) => {
    console.log(`${name}`);
})(`debzoti`) // debzoti