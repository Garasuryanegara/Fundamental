const data = require("./classQueue.js");

// console.log([pertama, kedua, ketiga, keempat]);
let arr = [
  new data(1, "Gara"),
  new data(2, "Udin"),
  new data(3, "Ujang"),
  new data(4, "Boni"),
];
console.log(arr);
console.log();
// const totalAntre = async (arr) => {
//   try {
//     console.log("Order List:");
//     arr.map((val) => {
//       val = val.antrian;
//       console.log(`Queue ${val}`);
//     });
//   } catch (error) {
//     console.log("Eroorr");
//   }
// };
// totalAntre(arr);

async function antre() {
  let noAntre = arr.map((val) => val.antrian);
  console.log(noAntre);
  let namaAntre = arr.map((val) => val.nama);
  let i = 0;
  while (i < arr.length) {
    let waktu = Math.floor(Math.random() * 10 + 1);
    let qPromise = new Promise(
      (resolve) =>
        setTimeout(() =>
          resolve(
            `Proses antrian ${noAntre[i]} atas nama ${namaAntre[i]} selama ${waktu} detik`
          )
        ),
      waktu * 1000
    );
    await qPromise.then((val) => {
      console.log(val), i++;
    });
    // console.log(`antrian ${noAntre[i]} telah selesai`);
  }
}

antre();
