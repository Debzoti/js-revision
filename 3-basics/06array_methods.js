// array methods

const arr = [1,2,3,4,5,6,7,8,9,10]

//forEach
// arr.forEach((element) => {
//     console.log(element);
// })
// // lets store it in a variable
// const arr2 = arr.forEach((element) => {
//     return element*2
// })
// console.log(arr2); // returns undefined because forEach doesn't return anything

//map --> returns a new array updated with some new values
// const arr3 = arr.map((element) => {
//     return element*2
// })
// console.log(arr3); // [2,4,6,8,10,12,14,16,18,20]

//filter --> filters the array
// const arr4 = arr.filter((element) => {
//     return element%2 == 0
// })
// console.log(arr4);// return even elements

//finding elements and their indexes
// find --> returns the first element that matches the condition
// const arr5 = arr.find((element) => {
//     return element%2 == 0
// })
// console.log(arr5); // return first even element and stops executing

//reduce --> reduces the array to a single value
// const arr6 = arr.reduce((acc,element) => { 
//     console.log(acc,element);  
//     return acc + element
// },0) // you set the initial value of element
// console.log(arr6);

//some --> returns true if at least one element matches the condition
// const arr7 = arr.some((element) => {
//     return element%2 == 0
// })
// console.log(arr7); // returns true

//method chaining
// const arr7 = arr.filter((element) => {
//     return element%2 == 0
// }).map((element) => {
//     return element*2
// })
// console.log(arr7);

