//nullish coalescing operator
const name1 = undefined
const name2 = null
const name3 = "debzoti"
console.log(name1 ?? name2 ?? name3 ?? "default value") // debzoti

//--> why use ? instead of || 
// || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

const number = 0
console.log(number || "debzoti") // debzoti
console.log(number ?? "debzoti") // 0;


