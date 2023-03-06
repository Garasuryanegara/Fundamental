//1. Write a code to display the multiplication table of a given integer.
//   Example : Number → 9
//   Output :
//   9 x 1
//   9 x 2
//   …
//   9 x 10

console.log('==========No.1==========');
let number = 5
// let pengali = 0
for (let i = 1; i < 11; i++) {
    // pengali++
    console.log(`${number} X ${i}`);
}
// console.log(`9 X ${pengali}`);

//2. Write a code to check whether a string is a palindrome or not.

console.log('==========No.2==========');

let kata = 'katak'
let kataReverse = kata.split('').reverse().join('')
let result = kata == kataReverse ? `${kata} is Palindrome word` : `${kata} is not Palindrome word`
console.log(result);

//3. Write a code to convert centimeter to kilometer.

console.log('==========No.3==========');

let cm = 1000000000
let km = cm / 100000
console.log(`${cm} cm = ${km} km`);

//4. Write a code to format number as currency (IDR)
//   Example : 1000 → “Rp. 1.000,00”.

console.log('==========No.4==========');

let Number = 10000000000;
console.log(`${Number} => "Rp. ${Number.toLocaleString('id-ID')},00`);

//5. Write a code to capitalize the first letter of each word in a string
//   Example : “hello world” → “Hello World”

console.log('==========No.5==========');

let Word = 'halo halo bandung'
let SplitWord = Word.split(" ")
for (let i = 0; i < SplitWord.length; i++) {
    SplitWord[i] = SplitWord[i].charAt(0).toUpperCase() + SplitWord[i].slice(1)
}
let Word2 = SplitWord.join(" ")
console.log(Word + ' = ' + Word2);

//6. Write a code to remove the first occurrence of a given “search string” from a string
//   Example : string = “Hello world”, search string = “ell” → “Ho world”

console.log('==========No.6==========');

let Str = 'Halo Halo Bandung'
let searchStr = 'alo'
let Result = Str.replaceAll(searchStr,'')
console.log(`String = "${Str}", Search String = "${searchStr}" => "${Result}"`);

//7. Write a code to reverse a string.

console.log('==========No.7==========');

let word = 'batam'
let revWord = word.split('').reverse().join('')
console.log(revWord);