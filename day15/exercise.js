//1. Write a code to check whether the date is a weekend.
function dayDate(date) {
  let day = new Date(date).getDay();
  if (day === 0 || day === 6) {
    return `Yes it's weekend!`;
  } else {
    return `No it's weekday`;
  }
}
console.log(dayDate("3-20-2023"));

//2. Write a code to find GCD of two numbers → use while.

function GCD(a, b) {
  //15 = 1,3,5,15
  //30 = 1,2,3,5,6,10,15,30
  //GCD = 3 * 5 * 15 = 225
  let arrA = [];
  let arrB = [];
  for (let i = 0; i < a; i++) {
    if (i % a == 0) {
      arrA.push(i);
    }
  }
  for (let i = 0; i < b; i++) {
    if (i % b == 0) {
      arrB.push(i);
    }
  }
}

//4. Write a code to find most common character from a string
let str = "amaiiizing";
let strSplit = str.split("");

function common(strSplit) {
  let result = { maxLength: 0, value: 0 };
  const set = new Set(strSplit);
  //   console.log(set);
  for (let value of set) {
    let tempLength = strSplit.filter((val) => val == value).length;
    // console.log(tempLength);
    if (result.maxLength < tempLength) {
      result.maxLength = tempLength;
      result.value = value;
    }
  }
  console.log(result);
}
common(strSplit);

//5.Write a code to sort a string alphabetically (with and without sort function).

let arr = ["a", "s", "e", "b"];
let arrbaru = [];
for (let i = 0; i < arr.length; i++) {
  arrbaru[parseInt(arr[i], 36) - 9] = arr[i];
}
console.log(arrbaru.join("").split(""));

let x = null;
// console.log(typeof x);

//11. Write a code to count the number of days passed since beginning of the year
let dates = new Date();
let days = Math.floor(
  (dates.getTime() - new Date(01 / 01 / 2023).getTime()) /
    1000 /
    60 /
    60 /
    24 /
    365
);
console.log(days);

//12. Write a code to calculate age.
// let birthdate = tanggal
// let age = tgl sekarang.getTime - birthdate.get.Time/1000/60/60/24/365
