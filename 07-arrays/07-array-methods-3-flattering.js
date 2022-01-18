const arr = [1, [[2]], [4], [8, 9]];

console.log(arr.flat(2));

const words = ["hello world", ["nodejs"]];

const wordsMapped = words.flat()

const wordsFlatMapped = words.flatMap((word) => {    
    return word
})

// console.log(wordsMapped)
console.log(wordsFlatMapped)
console.log(words)

// console.log(words.flat((word) => word.split(" ")));

// console.log(words.flatMap((word) => word.split(" ")))
