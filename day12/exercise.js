//1. Given an array nums of size n, return the majority element. The majority element is the element
//   that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists
//   in the array.

function major(arr) {
  let arrMaj = [];
  for (let i = 0; i < arr.length; i++) {
    let check = arr.sort().filter((val) => val == arr[i]);
    // console.log(check);
    if (check.length >= arr.length / 2) {
      //   if (arrMaj.length < 2) {
      arrMaj.push(...check);
      //   }
    }
  }
  return arrMaj[0];
}
console.log(major([1, 1, 1, 2, 3]));

// Function to find Majority element
function findMajority(int) {
  let maxCount = 0;
  let index = -1; // sentinels
  for (let i = 0; i < int.length; i++) {
    let count = 0;
    for (let j = 0; j < int.length; j++) {
      if (int[i] == int[j]) count++;
    }

    // update maxCount if count of
    // current element is greater
    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }

  // if maxCount is greater than n/2
  // return the corresponding element
  if (maxCount > int.length / 2) {
    console.log("Majority element is " + int[index]);
  } else {
    console.log("Majority Element does not exist");
  }
}

findMajority([1, 3, 4, 4, 4, 4, 1, 1, 3, 3]);

//2. Create a function to convert roman numeral to integer.
// let I = 1;
// let V = 5;
// let X = 10;
// let L = 50;
// let C = 100;
// let D = 500;
// let M = 1000;
// let roman = "IVXLCDM";
// let arrRoman = roman.split("");

// console.log(arrRoman);

// function romawi(rom = "") {
//   romSplit = rom.toUpperCase().split("");
//   console.log(romSplit);
//   result = 0;
//   for (let i = 0; i < romSplit.length; i++) {
//     if (arrRoman.indexOf(romSplit[0]) < arrRoman.indexOf(romSplit[1])) {
//       return (result = 10);
//     } else {
//       result = arrRoman.indexOf(romSplit[0]) - arrRoman.indexOf(romSplit[1]);
//     }
//   }
//   return result;
// }
// console.log(romawi("VI"));

let arrRoman = [];
arrRoman[1] = "I";
arrRoman[5] = "V";
arrRoman[10] = "X";
arrRoman[50] = "L";
arrRoman[100] = "C";
arrRoman[500] = "D";
arrRoman[1000] = "M";

function romawi(rom = "") {
  let romVal = [];
  for (let i = 0; i < rom.length; i++) {
    romVal.push(arrRoman.indexOf(rom.charAt(i)));
  }
  // console.log(romVal);

  let romVal2 = [];
  for (let j = 1; j <= romVal.length; j++) {
    if (romVal[j - 1] < romVal[j]) {
      romVal2.push(romVal[j - 1] * -1);
    } else {
      romVal2.push(romVal[j - 1]);
    }
  }
  // console.log(romVal2);
  let result = romVal2.reduce((p, c) => p + c);
  console.log(result);
}
romawi("XCV");

//3.Given an integer numRows, return the first numRows of
//  Pascal's triangle.

function pascal(n) {
  let t2 = [[1], [1, 1]];
  for (let i = 1; i < n - 1; i++) {
    let temp = [];
    for (let j = 0; j < t2[i].length - 1; j++) {
      let temp2 = t2[i][j] + t2[i][j + 1];
      temp.push(temp2);
    }
    t2.push([1, ...temp, 1]);
  }
  return t2;
}
console.log(pascal(4));

// let t1 = [1];
// let t2 = [1, 1];
// // let t3 = [1, 2, 1];

// function pascolita(n) {
//   tn = [];
//   for (let i = 0; i < n - 2; i++) {
//     let sum = t2[i] + t2[i + 1];
//     tn.push(sum);
//   }
//   tn.unshift(1);
//   tn.push(1);
//   console.log(tn);
//   t2 = [...tn];
//   console.log(t2);
// }

// pascolita(3);

//4.You are given an array prices where prices[i] is the price of a given stock on the ith day.
//  ● You want to maximize your profit by choosing a single day to buy one stock and choosing a
//    different day in the future to sell that stock.

function prices(price) {
  let arrPrice = [...price];
  let min = Math.min(...arrPrice);
  let buy = arrPrice.indexOf(min) + 1;
  // let slicePrice = arrPrice.slice(buy, arrPrice.length);
  let max = Math.max(...arrPrice);
  let sell = arrPrice.lastIndexOf(max) + 1;

  if (buy <= sell) {
    console.log(`no transaction are done and the max profit is 0`);
  } else {
    console.log(
      `Buy on day ${buy} (price = ${min}) and selling on day ${sell} (prices = ${max}), profit = ${max} - ${min} = ${
        max - min
      }`
    );
  }
}
prices([8, 7, 6, 1, 8, 3]);
