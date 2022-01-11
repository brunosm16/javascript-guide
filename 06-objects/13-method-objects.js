const arr = [1500, 1600, 1700];

// list of array elements
console.log(arr.toString());

// call toString method of each element in array
console.log(arr.toLocaleString());

function add() {
  return 1 + 2;
}

console.log(add.toString());

let totalPrice = {
  items: 5,
  unitPrice: 15,
  valueOf: function () {
    return this.items * this.unitPrice;
  },
};

console.log(Number(totalPrice));

// the toJSON() method
let album = {
  name: "pray for paris",
  artist: "westside gunn",
  dateOfRelease: new Date("2020-04-16"),
  numberOfSongs: 13,
  toString: function () {
    return `${this.name} - ${this.artist}`;
  },
  toJSON: function () {
    return this.toString();
  },
};

// console.log(album.toString())

let albumStringify = JSON.stringify(album)
console.log(albumStringify)
