//1.Write a function to get the lowest, highest and average value in the array (with and without sort function).

console.log('==========No.1==========');

function Value(...Arr) {
    let sortVal = Arr.sort()
    return sortVal;
}
console.log(Value(5,6,3,2));