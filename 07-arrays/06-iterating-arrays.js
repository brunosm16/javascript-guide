// using for-of to sparse array

const movies = ["the grand budapest hotel", "casino", , , undefined, "goodfellas"];

for (let [index, movie] of movies.entries()) {
//   if (index % 2 !== 0) {
    // print undefined values in sparse array
    console.log(movie);
//   }
}

console.log('\n----------\n')

// using foreach do not invoke function to elements that are not in array,
// undefined that was set will be considered
movies.forEach((movie, index) => {
    console.log(index)
    console.log(movie)
})

console.log(`length : ${movies.length}`)