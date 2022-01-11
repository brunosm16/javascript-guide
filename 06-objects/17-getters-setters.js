let album = {
  name: "magic",
  artist: "nas",
  dateOfRelease: "",
  numberOfSongs: "",

  get artistAndAlbum() {
    console.log(`i'm on getName`);
    return `${this.name} ${this.artist}`;
  },

  get getDateOfRelease() {
      console.log(`i'm on dateOfRelease`)
    return this.dateOfRelease;
  },

  set setDateOfRelease(dateOfRelease) {
    this.dateOfRelease = dateOfRelease;
  },
};

album.setDateOfRelease = new Date("2021-12-04");

console.log(album.artistAndAlbum);
console.log(album.getDateOfRelease);

console.log("------");
const albumDeluxe = Object.create(album);
// inherits from album
console.log(albumDeluxe.getDateOfRelease);
