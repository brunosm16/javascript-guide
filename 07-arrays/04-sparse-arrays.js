let arr1 = [,,,]
let arr2 = [undefined, '1']

// expects to false
console.log(0 in arr1)

// expects to be true even index 0 being undefined
console.log(0 in arr2)
console.log(1 in arr2)