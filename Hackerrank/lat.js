//1.find the total vowels letters.

function vowelsFinder(str) {
  let vowels = 0;
  let arrStr = str.split("");
  //   console.log(arrStr);
  arrStr.map((val) => {
    if (val == "a" || val == "i" || val == "u" || val == "e" || val == "o") {
      return vowels++;
    }
  });
  if (vowels > 0) {
    return vowels;
  } else {
    ("Tidak ditemukan huruf vokal");
  }
}
console.log(vowelsFinder("aiueo"));

//2.find the number of lowercase and uppercase in the word.

function lowerUpper(string) {
  let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = 0;
  let upper = 0;
  let arrAlpha = alpha.split("");
  let arrString = string.split("").filter((letter) => {
    return arrAlpha.includes(letter);
  });

  arrString.map((val) => {
    if (val.toUpperCase() == val) {
      return upper++;
    } else {
      return lower++;
    }
  });
  return `${lower},${upper}`;
}
console.log(lowerUpper("Hello Bitch!"));
