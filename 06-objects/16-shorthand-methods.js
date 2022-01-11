const getDate = Symbol("getDate");
const getArtist = "getArtist";

let album = {
  name: "pray for paris",
  artist: "westside gunn",
  dateOfRelease: new Date("2020-04-16"),
  numberOfSongs: 13,
  toString() {
    return `${this.name} - ${this.artist}`;
  },
  toJSON() {
    return this.toString();
  },
  [getDate]() {
    return `${this.dateOfRelease}`;
  },
  [getArtist]() {
    return `${this.artist}`;
  },
};

console.log(album.toString());
console.log(JSON.stringify(album));
console.log(album[getDate]());
console.log(album[getArtist]());
