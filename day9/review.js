arr = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = -arr[i];
}
console.log(sum);

sum = arr.reduce((a, b) => a - b);
console.log(sum);
