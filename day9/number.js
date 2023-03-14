// number
let angka = 100000;

let currency = angka.toLocaleString("id-ID");
console.log(currency);

let inf = Infinity;
let minInf = -Infinity;
console.log(inf);

let strNumber = angka.toString(); //cara 1
let strNumber2 = angka + "";
console.log(strNumber2);

console.log(angka++); //angka =- 1 postFix
console.log((angka += 1)); //angka += preFix
