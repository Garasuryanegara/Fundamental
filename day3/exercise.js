//No. 1

// 
let number=9
for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i}`);
}

//No. 2
// let string='hello';
// let Kata1 = string.split('');
// let reverseKata1 = Kata1.reverse();
// let reverseKata2 = reverseKata1.join('');
// if (string == reverseKata2) {
//     console.log(`${string} is Palindrome word`);
// } else {
//     console.log(`${string} is not Palindrome word`);
// };   

// function string(kata){
//     var kata1 = kata.split('').reverse().join('');
//     return kata === kata1;
// }
// console.log(string("madam"));

let string='mobil';
let Kata1 = string.split('').reverse().join('');
console.log(string == Kata1 ? `${string} is Palindrome word` : `${string} is not Palindrome word`);
// if (string == Kata1) {
//     console.log(`${string} is Palindrome word`);
// } else {
//     console.log(`${string} is not Palindrome word`);
// };   

//No.3
let centimeter = 100000
let kilometer = centimeter / 100000
console.log(`${centimeter} CM is ${kilometer} KM`);

//No. 4
let harga = 1000
let currency = ""
for (let i = 0; i < harga.toString().length; i++) {

    if(harga.toString().length%3 == 2) {
        if (i > 1 && ((harga.toString().length % 3 - i)%3 == 0)) currency += "."
    }
    else if (i > 0 && ((harga.toString().length % 3 - i)%3 == 0)) currency += "."
    currency += harga.toString().charAt(i)
}

console.log(`${harga} -> "Rp. ${currency},00"`);

//No. 5
let str = `"halo dunia"`
let searchstr = `nia`

console.log(`${str} dimabil kata ${searchstr} menjadi ${str.replace(searchstr,"")}`);

//No. 6

//deklarasi kalimat 
//awal kalimat pasti kapital
//setelah spasi pasti kapital
//panjang string length 
// looping sepanjang length
// if index =0 uppercase, else if index setelah spasi uppercase 
// console.log(kalimat.indexOf(" "))
// console.log(kalimat.charAt(kalimat
//     .indexOf(" ") + 1));
// let kalimat = 'hello world!';
// let kapital = kalimat.charAt(kalimat.indexOf(' ')+1)
// for (let i = 0; i <= kalimat.length; i++) {
//     if (kalimat.length == 0) {
//         console.log(kalimat.toUpperCase());
//     } else if (i==kapital)
//         console.log(kalimat.indexOf(' ').toUpperCase());
    
// }

let string1 = `hello world bandung`;
let splitstr = string1.split(" ");
console.log(splitstr);

for (let i = 0; i < splitstr.length; i++) {
    splitstr[i] = splitstr[i].charAt(0).toUpperCase() + splitstr[i].slice(1);
    
}
let string2 = splitstr.join(" ");

console.log(`${string1} -> ${string2}`);
    




//No. 7
let kata = 'purwadhika'
let reverse = kata.split('').reverse('').join('')
console.log(reverse);


