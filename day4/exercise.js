//No. 1
console.log('============No.1=============');
console.log(`\n`);


function triangle(h) {
    let val = 1
    for( let i = 0; i < h; i++) {
        let isi = ""
        for (let j = 0; j <= i; j++) {
        isi += val++ + " " 
        }
    console.log(isi);  
    }
    return triangle
}
triangle(4); 

console.log(`\n`);
//No. 2
console.log('============No.2=============');
console.log(`\n`);


function OddEven(n) {
    let fizz = 3
    let buzz = 5
    for (let i = 1; i <= n; i++) {
        if (i == 3*5) {
        console.log("FizzBuzz");    
        } else if (i%5 == 0) {
        console.log("Buzz");    
        }
        else if (i%3 == 0) {
        console.log("Fizz");
        }
        else{
            console.log(i);
        }
    }
    return OddEven;
}
OddEven(15);

console.log(`\n`);
//No. 3
console.log('============No.3=============');
console.log(`\n`);

function BodyMassIndex(w,h) {
    BMI = w / (h*h);
    if (BMI < 18.5) {
        console.log("Less Weight");
    } else if (18.5 < BMI && BMI < 24.9) {
        console.log("Ideal");
    } else if (25 < BMI && BMI < 29.9) {
        console.log("Overweight");
    } else if (30 < BMI && BMI < 39.9) {
        console.log("Very Overweight");
    } else if (BMI > 39.9) {
        console.log("Obesity");
    }
    return BMI;
}

BodyMassIndex(400,2.0)

console.log(`\n`);
//No. 4
console.log('============No.4=============');
console.log(`\n`);

let Arr=[1,2,3,4,5,6,7,8,9,10]

let filteredArr = Arr.filter(function(num) {
    return num % 2 == 0
    }
)
console.log(filteredArr);

console.log(`\n`);
//No. 5
console.log('============No.5=============');
console.log(`\n`);

let str= 'Halo Bandung Apa Kabar'

let splitstr = str.split(' ')
console.log(splitstr);

function test(...abc) {
    console.log(test);
}
test(1,2,3,4)