const obj1 = {
    "__id": '1',
    "name": "Bruno",
    // overrides name already defined
    // "name" : "Silveira",
    "dateCreated": new Date()
}

const obj2 = obj1 

console.log('without modifying ...... \n')
console.log(obj1)
console.log(obj2)
console.log('----------------------------')

// modifying objects
obj2.name = 'Bruno Silveira'

console.log(obj1)
console.log(obj2)