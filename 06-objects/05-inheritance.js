let obj1 = {
    id: '1'
}

let obj2 = Object.create(obj1)

obj2.id = 5

console.log(obj2.id)

let obj3 = Object.create(obj2)

const str = obj3.toString()
console.log(str)