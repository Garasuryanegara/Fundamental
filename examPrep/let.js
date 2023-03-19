// function looping() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }
// looping();
// console.log(i);

const healthy = false;
const pulse = 65;

if (!healthy) {
  if (pulse < 72) console.log("kamu sedang darah rendah");
  else {
    console.log("kamu butuh istirahat");
  }
} else {
  if (pulse >= 72) console.log("kamu dalam kondisi sehat");
}

const add = (x, y) => x + y;

console.log(add(2, 3));

function adds(x, y) {
  x + y;
}
console.log(adds(4, 3));

let tekanan = "1";
switch (tekanan) {
  case "1":
    console.log("tekananaan");
    break;
  case "2":
    console.log("tekanan ban");
  case "3":
    console.log("tekanan banban");
    break;

  default:
    console.log("tekanan gaada");
}

function getSquareArea(size) {
  size * size;
}
// console.log(getSquareArea(2));
function getCubeVolume(size) {
  return getSquareArea(size) * size;
}
let x = getCubeVolume(2);
// console.log(x);

console.log(Boolean({}) + Boolean([]));
console.log(Math.sqrt(-25));

let i = 1;
while (true) {
  i++;
  // console.log(i);
  // console.log("Muter");
  if (i === 10) break;
}

let arr = [`gara`, `mikhsael`, `fahmi`, `rezky`];

arr.forEach(simpan);

function simpan(val, index) {
  console.log(val);
}
// console.log(arr.findIndex("gara"));

let cari = arr.find((val, index) => {
  if (index == 3) return true;
});
console.log(cari);

let arr2 = [5, 6, 7, 8];

arr2[0] = 1;

console.log(arr2);

let Obj1 = {};

Obj1["Nama"] = "gara";
Obj1["Kelas"] = 12;

Object.keys(Obj1);
let val = Object.values(Obj1);
let entries = Object.entries(Obj1);

console.log(entries[1][1]);

let txt = "aku sedang mencuci ayam";
console.log(txt.slice(11, 18));

let txt2 = txt.split(" ");
console.log(txt2);
console.log(txt2.splice(0, 1));
console.log(txt2);

// let date = new Date();
// console.log(date.setDate(10));
// console.log(Math.sqrt(25));
// for (val of txt2) {
//   console.log(val);
// }

switch (3 % 3 == 1) {
  case 0:
    console.log("yess");
    break;
  default:
    console.log("noo");
    break;
}

let bool = Boolean(3 % 3) == 0;
console.log(bool);

let arrr = [1, 3, 5, 6, 2, 4, 8, 10, 20];
console.log(arrr.sort((a, b) => a - b));

// console.log(undefined || "string");

console.log(Boolean(3 % 3 == 1));

// let yy = 10;
// while (yy < 20) {
//   console.log(yy);
//   yy = +2;
// }

// let xx = 10;

// do {
//   console.log(xx);
//   xx++;
// } while (xx < 5);

let a = 10;
let b = 20;
let c = (a += b);
let d = (a = +b);

console.log(c);
console.log(d);

console.log(d + 10);

for (let i = 1; i <= 5; i++) {
  ++i;
  console.log(i);
}

let num = [1, 2, 3, 4, 5, 6, 7];
let each = num.forEach((val, index) =>
  console.log(`${val} adalah index ke ${index}`)
);
// console.log(each);
