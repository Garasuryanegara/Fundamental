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
// replace multiples of ú with "Fizz", multiples of ü with "Buzz", multiples of 3 and 5 with "FizzBuzz".

// Parameters : n → total looping

