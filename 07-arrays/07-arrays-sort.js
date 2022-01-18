let arr = [333, 921, 5, 3, 153, 987, 70];

// arr.sort();

// comparator function
arr.sort((a, b) => {
  return a - b;
});

console.log(arr);
