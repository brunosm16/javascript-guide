let user = Object.create({ name: 'Bruno', surname: 'Silveira' })

console.log(user.name + user.surname)

// object will not have basic properties such as 'toString',
// because it won't inherit from no prototype
let nullishUser = Object.create(null)

// TypeError: nullishUser.toString is not a function
// console.log(nullishUser.toString())

// non null object has basic methods
console.log(user.toString())

// creates an empty object
let emptyObj = Object.create(Object.prototype)
console.log(emptyObj)