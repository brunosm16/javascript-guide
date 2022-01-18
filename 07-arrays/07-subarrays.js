const users = require('./fake-users')

const namesFlatMap = users.flatMap((user) => user.name)

console.log(namesFlatMap)

console.log(namesFlatMap.slice(0,3))

// expects to return element from index 4
console.log(namesFlatMap.slice(0,-1))

const arr = [1,2,3,4,5]

// console.log(arr.splice(3))
console.log(arr.splice(3,1, 6, 7))
console.log(arr)
console.log(arr.length)


