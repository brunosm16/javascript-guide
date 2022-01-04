const album = {
    name: 'aquemini',
    artist: 'outkast',
    numberOfSongs: 16,
    releaseDate: new Date('1998-08-29'),
    rating: 5,
}

// uses album as prototype
const albumDeluxe = Object.create(album)

delete album.numberOfSongs

// don't delete prototype property
delete albumDeluxe.rating

console.log(album)
console.log(albumDeluxe.rating)

function getName() {
    console.log(album.name)
}

// false
console.log(delete Object.prototype)