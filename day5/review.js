//Write a function to get the lowest, highest and average value in the array (with and without sort function).

console.log('==========No.1==========');

//With Sort function
// function a(Arr) {
//     Arr.sort((a,b) => a-b)
//     console.log(Arr);
//     console.log(`Min Value = ${Arr[0]}`);
//     console.log(`Max Value = ${Arr[Arr.length - 1]}`);
//     let sum = Arr.reduce((a,b) => a+b)
//     console.log(`Average Value = ${sum/Arr.length - 1}`);        
// }

//Without Sort function
function a(Arr) {
    console.log(Arr);
    MaxVal = Math.max.apply(Math,Arr);
    MinVal = Math.min.apply(Math,Arr);
    console.log(`Min Value = ${MinVal}`);
    console.log(`Max Value = ${MaxVal}`);
    let sum = Arr.reduce((a,b) => a+b)
    console.log(`Average Value = ${sum/Arr.length - 1}`);
    
}
a([5,7,4,10,2,1])

//Write a function that takes an array of words and returns a string by concatenating the words in 
//the array, separated by commas and - the last word - by an 'and'.

console.log('==========No.2==========');


