//input arr=[16, 21, 18, 23, 1, 4, 8, 9, 11, 1]
//expected output "purwadhika"

let alpha = " abcdefghijklmnopqrstuvwxyz";
let arrAlpha = alpha.split("");
console.log(arrAlpha);
function convert(arr = []) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] = alpha.charCodeAt(i))) {
      result.push(arrAlpha[i]);
    }
  }

  return result;
}
console.log(convert([16, 21, 18, 23, 1, 4, 8, 9, 11, 1]));
