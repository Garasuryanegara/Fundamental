//1.Create a function to check if two objects are equal

let obj1 = { Gender: "natu", Nami: "Sabil" }; // deklarasi obj1 dan obj2
let obj2 = { Gender: "natu", Nama: "Gara" };

function persamaan(obj1, obj2) {
  //buat function untuk mengecek persamaan kedua object
  let arr1 = Object.keys(obj1); //mengubah object ke dalam array
  let arr2 = Object.keys(obj2);

  if (arr1.length == arr2.length) {
    //membandingkan panjang properti dalam object, jika tidak sama maka false
    for (let i = 0; i <= arr1.length; i++) {
      //jika true, maka membandingkan value dalam properti dengan looping for
      if (obj1[arr1[i]] == obj2[arr2[i]]) {
        return true; //jika value sama maka return true
      }
      return false; //jika value berbeda maka return false
    }
    return false; // jika panjang prop berbeda maka return false
  }
}
console.log(persamaan(obj1, obj2));

//2.Create a function to get the intersection of two objects

function intersection(obj1, obj2) {
  let Arr1 = Object.keys(obj1);
  let Arr2 = Object.keys(obj2);
  let arrCombine = {};
  Arr1.map((val) => {
    Arr2.map((val2) => {
      if (val === val2) {
        arrCombine[val] = obj1[val];
      }
    });
  });
  return arrCombine;
}
console.log(intersection(obj1, obj2));

//3.Create a function to merge two array of student data and remove duplicate data

array1 = [
  { name: "Student1", email: "student1@mail.com" },
  { name: "Student2", email: "student2@mail.com" },
  { name: "Student3", email: "student3@mail.com" },
];
array2 = [
  { name: "Student1", email: "student1@mail.com" },
  { name: "Student4", email: "student4@mail.com" },
  { name: "Student5", email: "student5@mail.com" },
];

function gabung(array1, array2) {
  let arrGabungan = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return delete array1[i];
    } else {
      return arrGabungan.push(array1[i]);
    }
  }

  return arrGabungan;
}
console.log(gabung(array1, array2));
