const user = {
    "name": 'Bruno'
}

const fakelibrary = require('./fake-library')

// modifies name
// fakelibrary(user)

const modifiedUser = fakelibrary(Object.create(user))

console.log(user)
console.log(modifiedUser)