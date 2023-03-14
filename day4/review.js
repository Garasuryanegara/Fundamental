// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10

console.log('==========No.1==========');

function triangleHeight(h) {
    let value = 1
    for (let i = 0; i < h; i++) {
        let isi = ''
        for (let j = 0; j <= i; j++) {
        if (value < 10) isi += '0'+value++ + ' ';
        else isi += value++ + ' ';
        }
        console.log(isi);    
        }

    }

triangleHeight(10);

// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".

// Parameters : n → total looping

console.log('==========No.2==========');

function pisbus(start,end) {
    for (let i = start; i <= end; i++) {
        if (i % 3 == 0) {console.log('Fizz');}
        else if (i % 5 == 0) {console.log('Buzz');}
        else if (i % 15 == 0) {console.log('FizzBuzz');}
        else {console.log(i);}
    }
}
pisbus(1,20)

// Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

console.log('==========No.3==========');

function BMI(w,h) {
    let cal= w/h**2
    console.log(cal);
    if (cal < 18.5) {console.log('Less Weight');}
    else if (18.5 <= cal && cal <= 24.9) {console.log('Ideal');}
    else if (25 <= cal && cal <= 29.9) {console.log('Overweight');}
    else if (30 <= cal && cal <= 39.9) {console.log('Very Overweight');}
    else if (39.9 < cal) {console.log('Obesity');}
}
BMI(86,1.7)

//Write a function to remove all odd numbers in an array and return a new array that contains 
//even numbers only

console.log('==========No.4==========');

let aray = []
let arayGenap = []
function kalkukasi(start,end) {
    for (let i = start; i <= end; i++) {
        aray.push(i)
        if (i % 2 == 0) {arayGenap.push(i)}
    
    }
    console.log(aray);
    console.log(arayGenap);
}
kalkukasi(1,10)

// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

console.log('==========No.5==========');

function Splitstr(word) {
    let seplit = word.split(" ")
    console.log(seplit);
}
Splitstr('Halo Halo Bandung');