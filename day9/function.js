let f1 = (parameter) => {
  //expression
};

function f2(parameter) {
  //deklarasi
}

function rekursif(a, sum = 0) {
  sum += a;
  if (sum == 1) {
    return sum;
  } else {
    return a - rekursif(a - 1), sum;
  }
}
console.log(5);
