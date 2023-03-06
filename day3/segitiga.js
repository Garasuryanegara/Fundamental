//exercise segitiga

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let tinggiSegitiga = 10

// let value = 1
// for (let i = 0; i < tinggiSegitiga; i++) {
//     let s = " "
//     for (let j = 0; j <= i; j++) {
//         s += value++ + " "
//     }
//     console.log(s);
// }

function segitiga(h) {

let value = 1
for (let i = 0; i < h; i++) {
    let s = " "
    for (let j = 0; j <= i; j++) {
        s += value++ + " "
    }
    console.log(s);
}}
console.log(segitiga(4));

// 1 2 3 4 5
// 6 7 8 9
// 10 11 12
// 13 14
// 15
// let value2 = 1;
// for (let i = 0; i < tinggiSegitiga; i++) {
//     let s = ""
//     for (let j = 0; j < tinggiSegitiga-i; j++) {
//         s += value2++ + " "
//     }
//     console.log(s);
// }

// 1 2 3 4 5
// 2 3 4 5
// 3 4 5
// 4 5
// 5

// for (let i = 0; i < tinggiSegitiga; i++) {
//     let s = ""
//     for (let j = 0; j < tinggiSegitiga-i; j++) {
//         s += (j + i + 1) + " "
//     }
//     console.log(s);
// }

// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15

// for(let i = 0; i < tinggiSegitiga; i++) {
//     value2 = 1 + i
//     let s = value2 + " "
//     for (let j = 1; j <= i; j++) {
//         value2 += tinggiSegitiga -j
//         s += value2 + " " 
//     }
//     console.log(s);
// }