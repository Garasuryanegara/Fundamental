//pseudocode untuk soal menentukan anagram

//deklarasi input string s dan t
//ubah input string menjadi array
//bandingkan length dari masing2 array
//  =apabila true, maka sort semua index berdasarkan urutan alphabeth
//  =apabila false, masa return false
//bandingkan hasil sort kedua array
//  =apabila true, maka return true
//  =apabila false, maka return false

let s = "anagram";
let t = "anagran";
//cara sort
let arrS = s.split("").sort().join();
console.log(arrS);
let arrT = t.split("").sort().join();
console.log(arrT);
if (arrT == arrS) {
  console.log(true);
} else {
  console.log(false);
}
//cara includes
function anagram2(s, t) {
  if (s.length != t.length) {
    return console.log(false);
  } else {
    for (const letter of t) {
      if (!s.includes(letter)) {
        return console.log(false);
      } else {
        s.replace(letter, "");
      }
      return console.log(true);
    }
  }
}
anagram2("makan", "kanan");

function selectionSort(arr) {
  let min = [];
  for (let i = 0; i < arr.length; i++) {
    min = i;
    // min = 0
    for (let j = i + 1; j < arr.length; j++) {
      //j = 1,j = 2,j = 3
      if (arr[j] < arr[min]) min = j; // 72 < 29, 98 < 29, 13 < 29
    }
    if (min != i) [arr[i], arr[min]] = [arr[min], arr[i]]; // 0 != 0
  }
  return arr;
}
console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
