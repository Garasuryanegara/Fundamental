//1. Write a code to convert celsius to fahrenheit.

console.log("==========No.1==========");

function ConvertFahr(C) {
  return (C * 9) / 5 + 32;
}
console.log(ConvertFahr(100));

//2. Write a code to check whether the number is odd or even

console.log("==========No.2==========");

function Checker(num) {
  if (num % 2 == 0) {
    console.log("This number is Even");
  } else {
    console.log("This number is Odd");
  }
}
Checker(8);

//3. Write a code to check whether the number is prime number or not

console.log("==========No.3==========");

// let nomer = 4
// let prima = false;
// if (nomer == 0 || nomer == 1 ) prima = false;

// for (let i = 2; i <= nomer / 2 ; i++) {
//     if (nomer % i == 0) {
//         prima = false
//         break;
//     }
// }
// if (nomer = true) {
//     console.log('This is a Prime Number');
// } else {console.log('This is not a Prime Number');}

// value ? console.log('This is a Prime Number') : console.log('This is not a Prime Number');

let nomer = 15;

let pembagi = 0;
for (let i = 0; i <= nomer; i++) {
  if (nomer % i == 0) {
    pembagi++;
  }
}
if (pembagi == 2) {
  console.log("This is a Prime Number");
} else console.log("This is not a Prime Number");

//4. Write a code to find the sum of the numbers 1 to N.
//   Example : 5 → 1 + 2 + 3 + 4 + 5 = 15

console.log("==========No.4==========");

let nomer1 = 5;
let num = 0;
let text = `${nomer1} =>`;
for (let i = 1; i <= nomer1; i++) {
  i == 1 ? (text += ` ${i}`) : (text += ` + ${i}`);
  // if ( i == 1 ) {
  //     console.log(text += ` ${i}`);
  // } else {
  //     console.log(text += ` + ${i}`);
  // }
  num += i;
}

console.log(text + " = " + num);

//5. Write a code to find factorial of a number.

console.log("==========No.5==========");

let nomer2 = 5;
let num2 = 1;
let text2 = ` ${nomer2} => `;
for (let i = 1; i <= nomer2; i++) {
  i == 1 ? (text2 += ` ${i}`) : (text2 += ` X ${i}`);
  num2 = num2 * i;
}

console.log(text2 + " = " + num2);

//6. Write a code to print the first N fibonacci numbers.

console.log("==========No.6==========");

let nomer3 = 14;
let temp1 = 0;
let temp2 = 1;
let temp3 = 0;
let text3 = `${nomer3} of Fibonnaci's number is ${temp1}, ${temp2}`;
for (let i = 2; i < nomer3; i++) {
  temp3 = temp1 + temp2;
  text3 += ` , ${temp3}`;
  temp1 = temp2;
  temp2 = temp3;
}
console.log(text3);
