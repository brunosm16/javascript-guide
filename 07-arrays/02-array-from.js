const arrayLike = {
    0: 'bruno',
    1: new Date(),
    length: 6
}

const arrayLikeToArr = Array.from(arrayLike)

console.log(arrayLikeToArr)