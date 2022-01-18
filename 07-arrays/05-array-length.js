const capos = ['tony soprano', 'paulie gaultieri', 'silvio dante', 'christopher moltisanti', 'bobby bacala']

console.log(capos)

capos.length = 2

// expects length to be 2
console.log(capos.length)
console.log(capos)

capos.length = 15

// add empty values
console.log(capos)

let songs = ["french toast", "327", "no vacancy"]

// has no index at 1
delete songs[1]
console.log(0 in songs);

// false
console.log(1 in songs);

console.log(songs)

// don't change the length, because becomes sparse
console.log(songs.length)