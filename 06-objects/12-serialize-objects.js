const user = {
    "__id": 1,
    "name": "Anthony Soprano",
    "year": new Date('1959-08-12'),
    "gender": "male",
    "nationality": "american"
}

let userJSON = JSON.stringify(user)

console.log(typeof userJSON)

let userBackToPlainJs = JSON.parse(userJSON)

console.log(userBackToPlainJs)

let objNaN = JSON.stringify(NaN)

console.log(objNaN)

const date = new Date()

const dateJSON = JSON.stringify(date)

console.log(dateJSON)

const dateBackToPlainJs = JSON.parse(dateJSON)

// doesn't have same methods of object 
console.log(dateBackToPlainJs)