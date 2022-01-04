const user = {
    "__id": 1,
    "name": "Anthony Soprano",
    "year": new Date('1959-08-12'),
    "gender": "male",
    "nationality": "american"
}

const defaultValues = {
    "tvShow": "sopranos",
    "seasons": 6
}

const user2 = Object.assign({}, defaultValues, user)

console.log(user)
console.log(user2)
console.log(defaultValues)

