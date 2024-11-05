// decleration
const arr = [1,2,3,4,5,2,6,7,8,9,10] //preferred
const arr1 = new Array(1,2,3,4,5,2,6,7,8,9,10)
// accessing
console.log(arr[0]);
console.log(arr[arr.length-1]); //last element
console.log(arr.at(-1)); // anoher way to access last element

// mutating
arr[0] = 100;
console.log(arr);

//methods
console.log(arr.indexOf(1)); //returns index of first occurence
console.log(arr.lastIndexOf(2)); //returns index of last occurence
console.log(arr.includes(2)); // returns true if element is present in the array


//injecting and removing elements in front and back
arr.unshift(0); // add element at the front
arr.shift(1); // remove element at the front
console.log(arr);
arr.push(11); // add element at the back
arr.pop(2); // remove element at the back
console.log(arr);
// --> push/pop are faster than unshift/shift in arrays


//looping through an array
for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
}
//for...of
for(let i of arr){
    console.log(i);
}
// why not for..in ?
for(let i in arr){
    console.log(arr[i]);
} //this is not optimal becoz The loop for..in iterates over all properties, not only the numeric ones.

//There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.

//array methods
console.log(arr.sort()); // sorts the array
console.log(arr.reverse()); // reverse the array

//array destructuring
const [a,b,c] = arr
console.log(a,b,c); // 1 2 3

//splice method --> slice chnages the original array which it references so be careful
console.log(arr.splice(1,3)); // [2,3,4]
//also replace with splice
console.log(arr.splice(1,3,100,200,300)); // slice index one to three and replace with 100,200,300
// the splice method can also insert the elements without any removals. For that, we need to set deleteCount to 0:
console.log(arr.splice(1,0,100,200,300)); //inserts 100,200,300 

//slice --> slice upto a given index returns a new array and doesnt change the original array
const slicdArr = arr.slice(1,3);
//negetive values
console.log(arr.slice(-3,-1));// it slice the second index from last upto first index

//concat method
const arr2 = [1,2,3]
const arr3 = [4,5,6]
const arr4 = arr2.concat(arr3)
console.log(arr4); // 1,2,3,4,5,6

//iterating an array
//forEach
arr.forEach(element => {
    console.log(element);
});

//update an array in a new array
//map --> returns a new array updated with some new values
const arr5 = arr.map((element) => {
    return element*2
})
console.log(arr5);

//filter --> filters the array
const arr6 = arr.filter((element) => {
    return element%2 == 0
})
console.log(arr6);// return even elements

//finding elements and their indexes
//find --> returns the first element that matches the condition
const arr7 = arr.find((element) => {
    return element%2 == 0
})
console.log(arr7); // return first even element

//findIndex --> returns the index of the first element that matches the condition  
const arr8 = arr.findIndex((element) => {
    return element%2 == 0
})


//some --> returns true if at least one element matches the condition
const arr9 = arr.some((element) => {
    return element%2 == 0
})
console.log(arr9);

//every --> returns true if all elements match the condition
const arr10 = arr.every((element) => {
    return element%2 == 0
})
console.log(arr10);


//reduce --> reduces the array to a single value
const arr11 = arr.reduce((acc,element) => {
    return acc+element
})
console.log(arr11);

//explore more above on arricles then go further
