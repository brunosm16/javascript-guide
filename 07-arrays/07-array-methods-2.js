const fakeUsers = require("./fake-users");

const nameStartsWith = (user, userName) =>
  user.name.toLowerCase().startsWith(userName);

const userDelia = fakeUsers.find((user) => nameStartsWith(user, "delia"));

const userDeliaIndex = fakeUsers.findIndex((user) =>
  nameStartsWith(user, "delia")
);

console.log(userDelia);

console.log("\n---------------\n");

console.log(userDeliaIndex);

console.log("\n---------------\n");

console.log(fakeUsers[userDeliaIndex] === userDelia);

const dates = [new Date(), new Date(), new Date(), new Date()]

const everyDates = dates.every((date) => date.getFullYear() === 2022)
console.log(everyDates)


