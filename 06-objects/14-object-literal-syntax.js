let user = {
  name: "bruno",
  surname: "silveira",
};

function computeFullName() {
  return `${user.name} ${user.surname}`;
}

user[computeFullName()] = `${user.name} ${user.surname}`

console.log(user);
