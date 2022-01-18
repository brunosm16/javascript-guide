let arr = [1,2,3,4,5]

const reducedArr = arr.reduce((acc, value) => {
    console.log(acc, value)

    return acc + value;
})

console.log(reducedArr)