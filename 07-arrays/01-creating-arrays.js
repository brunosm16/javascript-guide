let array1 = ['a', 'b','c']

console.log(array1)

// sparse array 
let array2 = [, , ,]

// expects length of 3
console.log(array2.length)

const letters = "ABCDEFGHIJ"

// using spread operator with strings
let separatedLetters = [...letters]
console.log(separatedLetters)

// using set to avoid duplicated elements
const numbers = [1,2,1,1,3,5,5,8]

const nonRepeatedNumbers = [...new Set(numbers)]

console.log(nonRepeatedNumbers)


// creating Array using constructor

let arr3 = new Array(5)

// returns 5 empty items
console.log(arr3)

let arr4 = new Array(5,4)

// returns 5,4 as array elements
console.log(arr4)
