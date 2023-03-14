let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(arr);

console.log(arr.findIndex((val, index) => val == 8));
console.log(arr.find((val) => val == 3));
let arrNum = [1, 2, 3, 4, 5];

sum = 0;
for (let i = 0; i < arrNum.length; i++) {
  sum += arrNum[i];
}
console.log(sum);

sum = 0;
arrNum.map((val) => (sum += val));
console.log(sum);

arrNum.reduce((val, index) => val + index);
console.log(sum);
