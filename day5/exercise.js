//1.Write a function to get the lowest, highest and average value in the array (with and without sort function).

console.log('==========No.1==========');

//With Sort
let Arr = [12,3,5,4,7,6,9,8]
let ArrSort = Arr.sort(function(a,b) {
    return a-b;
})
let indexTerakhir = ArrSort.length - 1
console.log(Arr);
console.log(`Min Value = ${Arr[0]}`);
console.log(`Max Value = ${Arr[indexTerakhir]}`);

let Sum = Arr.reduce(function(a,b) {
    return a + b;
})
console.log(`Average Value = ${Sum / ArrSort.length}`);

//Without Sort
let MaxVal = Math.max.apply(Math, Arr)
console.log(`Max Value = ${MaxVal}`);
let MinVal = Math.min.apply(Math, Arr)
console.log(`Max Value = ${MinVal}`);

//2. Write a function that takes an array of words and returns a string by concatenating the words in 
//   the array, separated by commas and - the last word - by an 'and'.

console.log('==========No.2==========');

let Arr1 = [1,2,3,4,5,6,7,8,9,10,11,12];

function a(Arr1) {
let Arr2 = [...Arr1];
let ArrPop = Arr2.pop();
console.log(Arr2 + ' dan ' + ArrPop);

}
a(Arr1)

//3. Write a function to split a string and convert it into an array of words
//   Example : “Hello World” → [“Hello”, “World”]


console.log('==========No.3==========');

let word = 'Hello World'

function Splitter(word) {
let splitWord = word.split(" ")
console.log(splitWord);
}
Splitter(word)

//4. Write a function to calculate each element in the same position from two arrays of integer. 
//   Assume both arrays are of the same length.
//   Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]


console.log('==========No.4==========');

let Array1 = [5,7,3,9,1]
let Array2 = [6,9,1,2,4]
let Total = []
function sumArr(a,b) {
    for (let i = 0; i < Array1.length; i++) {
        Total.push(a[i] + b[i])
    }
    console.log(Total);
}
sumArr(Array1,Array2)


// function sumArr(Array1,Array2) {
//     result = Array1.map((value,i) => value + Array2[i])
//     console.log(result);
// }
// sumArr(Array1,Array2)

//5. Write a function that adds an element to the end of an array. However, the element should only 
//   be added if it is not already in the array.

console.log('==========No.5==========');

let Arr3 = ['Halo','Nama','Saya']
let newArr = 'Halo'

function Combine(Arr3,newArr) {
    if (Arr3.includes(newArr)) {
        console.log('Addtion is Cancelled');
    } else {
        console.log('Addition was Successful');
        Arr3.push(newArr);}
    
    console.log(Arr3);
}
Combine(Arr3,newArr)

//6.  Write a function to remove all odd numbers in an array and return a new array that contains even 
//    numbers only

console.log('==========No.6==========');
let arr4 = []
let arrGenap = []
let arrGanjil = []

function oddEven(start,end) {
    for ( let i = start; i <= end; i++) {
        arr4.push(i)
        if (i % 2 == 0) {
            arrGenap.push(i);
        } else {arrGanjil.push(i)}
    }
    console.log(arr4);
    console.log(arrGenap);
    console.log(arrGanjil);
}
oddEven(1,12)