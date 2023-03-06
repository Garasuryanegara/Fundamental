//No. 1
let Celcius = 10

console.log((Celcius*9/5)+32);

function konversi(Cel) {
    return ((Cel*9/5)+32)
    ;
}
console.log(konversi(10));

//No. 2
for (let i = 0; i < 10; i++) {
    if (i%2==0) {
       console.log('Genap');
    }
    else {
        console.log('Ganjil');
    }
}

//No. 3
// let primeNum=2
// if (primeNum==1) {
//     console.log('Not Prime');
// } else {
//     console.log('Prime');
// }

// for (let i = 0; i < primeNum; i++) {
//     if (primeNum%i==0) {
//         console.log('Not Prime');
//     } else {
//         console.log('Prime');
//     }
    
// }

let bilangan = 3

{let pembagi = 0
for (let i = 0; i <= bilangan; i++) {
    if (bilangan%i == 0){
        pembagi++
    }
}
if (pembagi == 2) {
    console.log('Prima');
} else {
    console.log('Bukan Prima');
}
}

//No. 4
let Number1=5
let n=0

for (let i = 0; i <= Number1; i++) {
    n += i 
}
console.log(n);

//No. 5
let Number2=4
let n1=1

for (let i = 0; i <= Number2; i++) {
    n1 *= i 
}
console.log(n1);    

//No. 6
// let fibonacci = 5 
// {let a = 0, b = 1, c = 5;
    
//     for(let i = 1; i <= fibonacci; i++) {
//         console.log(a);
//         c = a + b;
//         a = b;
//       b = c;
      
//     }
//   }

// program to generate fibonacci series up to n terms

// take input from the user
const number = 10
let m1 = 0, m2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(m1);
    nextTerm = m1 + m2;
    m1 = m2;
    m2 = nextTerm;
}
 

