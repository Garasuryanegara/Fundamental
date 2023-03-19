//1. Write a code to check whether the date is a weekend.
let date = new Date();
console.log(date.getDay());

//4. Write a code to find most common character from a string
let str = "amaiiizing";
let strSplit = str.split("");

function common(strSplit) {
  let result = { maxLength: 0, value: 0 };
  const set = new Set(strSplit);
  //   console.log(set);
  for (let value of set) {
    let tempLength = strSplit.filter((val) => val == value).length;
    // console.log(tempLength);
    if (result.maxLength < tempLength) {
      result.maxLength = tempLength;
      result.value = value;
    }
  }
  console.log(result);
}
common(strSplit);

let x = null;
// console.log(typeof x);
