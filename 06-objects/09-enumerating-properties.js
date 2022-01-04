const message = {
    "id": 0,
    "from_userId": 48569,
    "priority": 5,
    "dateSent": new Date(),
    "content": "Fake message",
    "status": 1
}

console.log(Object.keys(message))
console.log(Object.getOwnPropertyNames(message))
console.log(Object.getOwnPropertySymbols(message))
console.log(Reflect.ownKeys(message))