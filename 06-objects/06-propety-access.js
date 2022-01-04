const album = {
    name: 'aquemini',
    artist: 'outkast'
}

const { releaseDate } = album

// returns undefined 
console.log(releaseDate)

// ERROR - trying to access a property from undefined 
// console.log(releaseDate.length)

console.log(releaseDate?.length)