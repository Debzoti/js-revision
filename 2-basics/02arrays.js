// decleration
const arr = [1,2,3,4,5,2,6,7,8,9,10]

// accessing
// console.log(arr[0]);
// console.log(arr[arr.length-1]); //last element
// console.log(arr.at(-1)); // anoher way to access last element

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

