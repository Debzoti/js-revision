// iterate through objects
// --> for in loop
// const user = {
//     name : "debzoti",
//     email : "debzoti123@gmail.com",
//     "pet name" : "vicky",
//     id : 1
// }
// for (const key in user) {
//     console.log(key, user[key]);
// }           


// // itearte through strings
// const str = "debzoti"
// for (const char of str) {
//     console.log(char);
// }

// // iterate through arrays
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// // iterate through nodes
// const ul = document.querySelector("ul")
// for (const li of ul.children) {
//     console.log(li);
// }

//Array.from() --> converts array like object to array (array like object is an object that has length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need)
// const arrLikeObj = {
//     0 : "debzoti",
//     1 : "debzoti",
//     2 : "debzoti",
//     3 : "debzoti",
//     4 : "debzoti",
//     5 : "debzoti",
//     6 : "debzoti",
//     7 : "debzoti",
//     8 : "debzoti",
//     9 : "debzoti",
//     10 : "debzoti",
//     length : 11
// }
// const arr = Array.from(arrLikeObj)
// console.log(arr);

//converting string to array using array.from()
// const str = "debzoti"
// const arr = Array.from(str)
// console.log(arr);


