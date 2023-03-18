//1. Create a function to convert Excel sheet column title to its corresponding column number.

console.log("==========No.1==========");

let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(alpha.length);
let arrAlpha = alpha.split("");
// console.log(arrAlpha);
// console.log(arrAlpha.indexOf("C"));
// console.log(`G -> ${arrAlpha.indexOf("G") + 1}`);

function convert(str = "") {
  let upper = str.toUpperCase();
  let strSplit = upper.split("");
  let result = 0;
  if (str.length == 1) {
    result = arrAlpha.indexOf(str) + 1;
  } else if (str.length == 2) {
    result =
      26 * (arrAlpha.indexOf(strSplit[0]) + 1) +
      arrAlpha.indexOf(strSplit[1]) +
      1;
  } else if (str.length == 3) {
    result =
      (arrAlpha.indexOf(strSplit[0]) + 1) * 26 * 26 +
      (arrAlpha.indexOf(strSplit[1]) + 1) * 26 +
      (arrAlpha.indexOf(strSplit[2]) + 1);
  }
  return `Column number of ${str} is ${result}`;
}
console.log(convert("bbb"));

console.log("===different solution===");

function convert2(string) {
  let stringUp = string.toUpperCase();
  let digit1 = arrAlpha.indexOf(stringUp.charAt(0)) + 1;
  let digit2 = arrAlpha.indexOf(stringUp.charAt(1)) + 1;
  let digit3 = arrAlpha.indexOf(stringUp.charAt(2)) + 1;

  //   console.log(digit1, digit2, digit3);

  switch (stringUp.length) {
    case 1:
      console.log(digit1);
      break;
    case 2:
      console.log(26 * digit1 + digit2);
      break;
    case 3:
      console.log(digit1 * 26 * 26 + 26 * digit2 + digit3);
      break;

    default:
      break;
  }
}
convert2("bbb");

console.log("===different solution===");

let column = "BBB";
let arrAlfa = "abcdefghijklmnopqrstuvwxyz";

console.log(
  column.split("").reduce((prev, curr) => {
    return prev * 26 + parseInt(curr, 36) - 9;
  }, 0)
);

//2. Given a non-empty array of integers nums, every element appears twice except for one. Find
//   that single one.
console.log("==========No.2==========");

function single(arrInt = []) {
  arrRes = [];
  for (let i = 0; i < arrInt.length; i++) {
    let check = arrInt.filter((val) => val == arrInt[i]);
    if (check.length < 2) {
      arrRes.push(...check);
    }
  }
  return arrRes;
}
console.log(single([1, 4, 2, 4, 6, 1, 7]));

console.log("===different solution===");

function findSingle(arr = []) {
  arr.sort();
  return arr.filter((val, idx) => arr[idx - 1] != val && arr[idx + 1] != val);
}
console.log(findSingle([1, 1, 2, 2, 3, 3, 4, 5]));

//3. Given two strings s and t, return true if t is an anagram of s, and false otherwise.
console.log("==========No.3==========");

function anagrams(s, t) {
  let arrS = s.split("").sort().join("");
  let arrT = t.split("").sort().join("");
  if (arrS.length != arrT.length) {
    return false;
  } else {
    for (let i = 0; i <= arrS.length; i++) {
      if (arrS[i] != arrT[i]) return false;
    }
  }
  return true;
}
console.log(anagrams("bongogo", "gogobon"));

//4. You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1
//   or 2 steps. In how many distinct ways can you climb to the top?
console.log("==========No.4==========");

function manyWays(num) {
  let num1 = 0;
  let num2 = 1;
  let num3 = 0;
  let hasil = 0;
  for (let i = 0; i < num; i++) {
    num3 = num1 + num2;
    hasil = num3;
    num1 = num2;
    num2 = num3;
  }
  return hasil;
}
console.log(manyWays(2));

console.log("===different solution===");

let temp1 = 0;
let temp2 = 1;
function manyWays2(num) {
  if (num == 0) return 0;
  //   else if (num == 1) return 1;
  return manyWays2(num - 1) + manyWays(num - 2) + 1;
}
console.log(manyWays2(5));

//5
// m(4), [m(3) m(2)], [m(2), m(1)]
//m(3)
