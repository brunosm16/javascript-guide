const deluxeSongs = Symbol("deluxeSongs");

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
  deluxeSongs: 13,
  [deluxeSongs]: 16,
};

// alterando symbol
album[deluxeSongs] = 19
console.log(album);
