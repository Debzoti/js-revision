//maps

// //lets create a map --> map is a collection of key value pairs which are unique in nature
// const map = new Map();
// //adding keys and values
// map.set("name", "debzoti");
// map.set("age", 30);
// map.set("isStudent", true);
// console.log(map); // { 'name' => 'debzoti', 'age' => 30, 'isStudent' => true }

//another way to create a map
// const map = new Map([
//     ["name", "debzoti"],
//     ["age", 30],
//     ["isStudent", true]
//   ]);
//   console.log(map);

// //accessing values
// console.log(map.get("name")); // debzoti
// console.log(map.get("age")); // 30

// //deleting values
// map.delete("isStudent");
// console.log(map);

// //checking if a key exists
// console.log(map.has("name")); // true

// //iterating over keys and values
// for (const [key, value] of map) {
//     console.log(key, value);
// }

// //clearing the map
// map.clear();
// console.log(map); //Map(0) {}

//creating a map from an array
// const arr = ["apple", "banana", "orange"];
// const mapFromArr = new Map(arr.map((item, index) => [index, item]));
// console.log(mapFromArr);

//creating a map from an object
// const obj = { a: 1, b: 2, c: 3 };
// const mapFromObj = new Map(Object.entries(obj));
// console.log(mapFromObj); //Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

//creating a map from a string
// const str = "hello world";
// const mapFromString = new Map(str.split("").map((char, index) => [index, char]));
// console.log(mapFromString); /*map(11) {
//     0 => 'h',
//     1 => 'e',
//     2 => 'l',
//     3 => 'l',
//     4 => 'o',
//     5 => ' ',
//     6 => 'w',
//     7 => 'o',
//     8 => 'r',
//     9 => 'l',
//     10 => 'd'
//   }
// */


//creating a map from an array of objects
// const arrOfObjects = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
// const mapFromArrOfObjects = new Map(arrOfObjects.map((obj) => [obj.name, obj.age]));
// console.log(mapFromArrOfObjects); //Map(2) { 'John' => 30, 'Jane' => 25 }

