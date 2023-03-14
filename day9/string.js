let str = new String("abc");
let str2 = "udang goreng";

console.log(str);
console.log(str2);
console.log(str2.charAt(2)); // karakter di index 2 apa
console.log(str2.length); // menunjukan panjang index termasuk spasi
console.log(str2.includes("udang")); //menunujukan apakah ada nasi di dalam string, return true
//contoh
if (str2.includes("udang")) console.log("ada udang dibalik variabel");
console.log(str2.indexOf("udang"));
console.log(str2.lastIndexOf("n"));

console.log(str2.toUpperCase());
console.log('"makan udin", kata gula');
