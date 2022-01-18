const users = ["bruno", "marcia", "ricardo"];

const newUsers = users.map((user, index, currentUsers) => {
  // console.log(user)
  // console.log(index)
  // console.log(currentUsers)

  return "silveira";
});

console.log(newUsers);

// sparse interation

const albums = ["pray for paris", "alfredo", , , "piñata"];

// this array will have empty items also
const albumsRating = albums.map((album) => `rating - 10 - ${album}`)

console.log(albumsRating)

const sparse = ['javascript', , , , , ,'scala', 'nodejs', 'java']

// remove empty values
const dense = sparse.filter(() => true)

console.log(dense)
