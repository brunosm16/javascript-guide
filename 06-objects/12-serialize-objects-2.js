const givesBackError = JSON.stringify(undefined)

const sum = () => {
    return 1 + 2
}

const serializeFunction = JSON.stringify(sum)

// will return undefined
console.log(givesBackError)
console.log(serializeFunction) 