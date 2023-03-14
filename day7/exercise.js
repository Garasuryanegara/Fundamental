// //1. Create a function to check if two objects are equal.

// let obj1 = {nama: 'Gara',kelas: 'WD'} // membuat object
// let obj2 = {nama: 'Gara',umur: '20'}

//membuat function
function equal(obj1, obj2) {
  //mengubah object menjadi array untuk mengakses value pada object
  let arr1 = Object.keys(obj1);
  let arr2 = Object.keys(obj2);
  // console.log(arr1);

  if (arr1.length != arr2.length) {
    //bandingkan panjang arr1 dan arr2, jika true maka lanjut
    return false;
  }
  for (let i = 0; i <= arr1.length; i++) {
    //mengecek value dari properties dengan cara looping
    if (obj1[arr1[i]] != obj2[arr2[i]]) {
      return false;
    }
  }
  return true;
}

console.log(equal(obj1, obj2));

// //2. Create a function to get the intersection of two objects
// //     ● Example
//         // ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
//         // ○ Output: { a: 1 }

function combine(obj1, obj2) {
  let arr1 = Object.keys(obj1);
  let arr2 = Object.keys(obj2);
  let result = {};
  arr1.map((value, index) => {
    arr2.map((value2) => {
      if (value2 === value) {
        result[value] = obj1[value];
      }
    });
  });
  return result;
}

console.log(combine(obj1, obj2));

// //3.   Array1 = [
// //     { name: 'Student1', email : 'student1@mail.com' },
// //     { name: 'Student2', email : 'student2@mail.com' }
// //     ]
// //     Array2 = [
// //     { name: 'Student1', email : 'student1@mail.com' },
// //     { name: 'Student3', email : 'student3@mail.com' }
// //     ]
// //     Result :
// //     ArrayResult → [
// //     { name: ‘Student 1’, email : ‘student1@mail.com’ },
// //     { name: ‘Student 2’, email : ‘student2@mail.com’ },
// //     { name: ‘Student 3’, email : ‘student3@mail.com’ }
// //     ]

// array1 = [
//         { name: 'Student1', email : 'student1@mail.com' },
//         { name: 'Student2', email : 'student2@mail.com' }
//         ]
// array2 = [
//         { name: 'Student1', email : 'student1@mail.com' },
//         { name: 'Student3', email : 'student3@mail.com' }
//         ]

// function combineArr(array1,array2) {
//     let combine = [...array1,...array2]
//     // console.log(combine);
//     for (let i of combine) {
//         if (combine2.indexOf(i === -1))

//     }
//     console.log(combine2);

// }
// combineArr(array1,array2);
// //program to find the factorial of a number
// function factorial(x) {

//     // if number is 0
//     if (x == 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// // take input from the user
// const num = 4;

// // calling factorial() if num is positive
// if (num >= 0) {
//     const result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }
// else {
//     console.log('Enter a positive number.');}

// let angka = 4
// let faktorial = angka * factorial(angka-1)
// console.log(faktorial);

// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2) {
  // merge two arrays
  let arr = arr1.concat(arr2);
  console.log(arr);
  let uniqueArr = [];

  // loop through array
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5];

// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2);
