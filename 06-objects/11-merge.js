// Receives a targetObj and sources
function merge(targetObj, ...sources) {
    for (let source of sources) {
        for (key of Object.keys(source)) {
            const keyExists = key in targetObj

            if (!keyExists) {
                targetObj[key] = source[key]
            }
        }
    }
    return targetObj
}

const user = {
    "__id": 1,
    "name": "Anthony Soprano",
    "year": new Date('1959-08-12'),
    "gender": "male",
    "nationality": "american"
}

const user2 = {
    "__id": 2,
    "name": "Anthony Soprano Jr",
    "year": new Date('1986-06-17'),
    "gender": "male",
    "nationality": "american",
    "countryCode": 1
}

const user3 = {
    "__id": 3,
    "name": "Carmela Soprano",
    "year": new Date('1960-11-29'),
    "gender": "female",
    "nationality": "american",
    "countryCode": 1,
    "guid": 'cf7435bc-f6d5-4cee-848c-8ff301cbff7d',
    "address": '711 Mahlon Street, Freehold, NJ'
}

const user4 = {
    "__id": 4,
    "name": "Meadow Soprano",
    "year": new Date('1960-11-29'),
    "gender": "female",
    "nationality": "american",
    "countryCode": 1,
    "guid": 'cf7435bc-f6d5-4cee-848c-8ff301cbff7d',
    "address": '711 Mahlon Street, Freehold, NJ'
}

const defaultValues = {
    "tvShow": "sopranos",
    "seasons": 6
}

const userMerged = merge(user, user2, user3, user4)

console.log(userMerged)