function calculator(a, b) {
  return a + b;
}
function displayer(something) {
  console.log(something);
}

displayer(calculator(5, 5));

const tryPromise = new Promise((resolve, reject) => {
  let isError = false;
  if (isError) {
    reject("Error");
    resolve("Success");
  }
});

const asyncAwait = async () => {
  console.log("satu");
  await tryPromise.then((res) =>
    console
      .log(res)
      .catch((Error) => console.log(Error))
      .finally(() => console.log("finally done"))
  );
  console.log("dua");
};
asyncAwait();
