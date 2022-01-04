let movie = {
    name: 'the grand budapest hotel',
    director: 'wes anderson'
}

// uses in to check out for properties
const nameExist = "name" in movie
const directorExist = "director" in movie
const yearExist = "yearOfRelease" in movie
const toStringExist = "toString" in movie

console.log(`using 'in'`)
console.log(nameExist, directorExist, yearExist, toStringExist)
console.log('----------')

console.log(`using hasOwnProperty`)
console.log(movie.hasOwnProperty("name"), movie.hasOwnProperty("toString"))
console.log(`is enumerable: ${movie.propertyIsEnumerable('name')}`)
console.log('----------')
