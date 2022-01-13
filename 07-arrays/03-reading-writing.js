let a = ["world"]

let value = a[0]

console.log(a)
console.log(value)

// creates a new property
a[-1] = true
a["50"] = 'fifth element'
// expects '-1':true
console.log(a)

// expects length to be 51, do not count '-1' property
console.log(a.length)