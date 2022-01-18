const numbers = [1,2,3,4,5];

// const numbersReduced = numbers.reduce((x,y) => x * y, 1)

// uses first element as value
const numbersReduced = numbers.reduce((x,y) => x * y)

const numbersDivided = numbers.reduce((x,y) => x / y)

const numbersReducedRight = numbers.reduceRight((x,y) => x / y)

// numbers.reduce((x,y, index, currentArray) => {
//     console.log(index)
//     console.log(currentArray)
//     return x * y
// }, 1)

console.log(numbersReduced)
console.log(numbersDivided)
console.log(numbersReducedRight)