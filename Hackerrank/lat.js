//1.find the total vowels letters.

// function vowelsFinder(str) {
//   let vowels = 0;
//   let arrStr = str.split("");
//   //   console.log(arrStr);
//   arrStr.map((val) => {
//     if (val == "a" || val == "i" || val == "u" || val == "e" || val == "o") {
//       return vowels++;
//     }
//   });
//   if (vowels > 0) {
//     return vowels;
//   } else {
//     ("Tidak ditemukan huruf vokal");
//   }
// }
// console.log(vowelsFinder("aiueo"));

//2.find the number of lowercase and uppercase in the word.

// function lowerUpper(string) {
//   let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let lower = 0;
//   let upper = 0;
//   let arrAlpha = alpha.split("");
//   let arrString = string.split("").filter((letter) => {
//     return arrAlpha.includes(letter);
//   });

//   arrString.map((val) => {
//     if (val.toUpperCase() == val) {
//       return upper++;
//     } else {
//       return lower++;
//     }
//   });
//   return `${lower},${upper}`;
// }
// console.log(lowerUpper("Hello Bitch!"));

function oddEven(arr) {
  let odd = 0;
  let even = 0;
  arr.map((val) => {
    if (val % 2 == 0) {
      odd++;
    } else {
      even++;
    }
  });
  console.log(odd, even);
}
oddEven([10, 11, 12, 13]);

function sumLetter(s) {
  let alpha = "0abcdefghijklmnopqrstuvwxyz";
  let alphaSplit = alpha.split("");
  let sSplit = s.toLowerCase().split("");
  let arrSum = sSplit.map((val) => alphaSplit.indexOf(val));
  let sum = arrSum.reduce((a, b) => a + b);
  console.log(sum);
}
sumLetter("Purwadhika");

function conversionMoney(number) {}

let number = "150000";
let arr = [
  "100000",
  "75000",
  "50000",
  "20000",
  "10000",
  "5000",
  "2000",
  "1000",
];
let result = [];
for (let i = 0; i < arr.length; i++) {
  let convert = 150000 % arr[i];
  result.push(convert);
}
console.log(result);
