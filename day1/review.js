//1. Write a code to find area of rectangle.

console.log("==========No.1==========");

function LuasPersegi(a,b) {
    return a*b;
}
console.log(LuasPersegi(2,5))

//2. Write a code to find perimeter of rectangle.

console.log("==========No.2==========");

function KelilingPersegi(a,b) {
    return 2*(a + b)
}
console.log(KelilingPersegi(2,5));

//3. Write a code to find diameter, circumference and area of a circle..

console.log("==========No.3==========");

function Diameter(r) {
    return r**2
}
console.log(Diameter(4));

function KelilingLingkaran(p,r) {
    return p * 2 * r
}
console.log(KelilingLingkaran(3.14,4));

function LuasLingkaran(p,r) {
    return p * r * r
}
console.log(LuasLingkaran(3.14,4));


//4. Write a code to find angles of triangle if two angles are given.

console.log("==========No.4==========");

function Sudutsegitiga (a,b) {
    let allAngles = 180
    return allAngles - a - b
}
console.log(Sudutsegitiga(100,30));

//5. Write a code to get difference between dates in days.

console.log("==========No.5==========");

let Date1 = new Date('2023-03-04')
let Date2 = new Date('2023-01-08')
let Diff = Date1 - Date2
console.log(Diff / (1000*60*60) / 24);

//6. Write a code to convert days to years, months and days.
//    Example : 400 days → 1 year, 1 month, 5 days
//              1 year : 365 days, 1 month : 30 days

console.log("==========No.6==========");

function kalkulasi(num) {
    year = Math.floor(num / 365)
    month = Math.floor(num % 365 /30)
    days = Math.floor(num % 365 % 30)
    return `${num} hari adalah ${year} tahun, ${month} bulan, ${days} hari.`;
}
console.log(kalkulasi(500));
