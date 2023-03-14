// Create a function to calculate array of student data
// ● The object has this following properties :
//  ○ Name → String
//  ○ Email → String
//  ○ Age → Date
//  ○ Score → Number
// ● Parameters : array of student
// ● Return values :
//  ○ Object with this following properties :
//    ■ Score
//      ● Highest
//      ● Lowest
//      ● Average
//    ■ Age
//      ● Highest
//      ● Lowest
//      ● Average

//buat class yang berisikan nama,email,age,dan score
//masukan daftar student
//ubah objek ke dalam bentuk array
//buat converter dari date (tanggal) ke umur
//buat function
//mengeluarkan value age dari setiap object
//mencari max,min, and average value
//mengeluarkan value age dari setiap object
//mencari max, min, and average value
//membuat class yang berisikan highest, lowest, and average
//membuat object berisikan hasil value min,max, and average

// let Student = class {
//   constructor(name, email, birthdate, score) {
//     this.name = name;
//     this.email = email;
//     this.birthdate = birthdate;
//     this.score = score;
//     this.age = Math.floor(
//       (new Date().getTime() - new Date(birthdate).getTime()) /
//         1000 /
//         60 /
//         60 /
//         24 /
//         365
//     );
//   }
// };

// let student1 = new Student("Gogon", "gongon@gmail.com", "2000/08/01", 75);
// let student2 = new Student("Gigin", "gingin@gmail.com", "1995/03/15", 80);
// let student3 = new Student("Gugun", "gungun@gmail.com", "1982/12/07", 90);
// let student4 = new Student("Gegen", "gungun@gmail.com", "1990/08/27", 100);

// let arrStd = [student1, student2, student3, student4];
// console.log(arrStd);

// let HLA = class {
//   constructor(highest, lowest, average) {
//     this.highest = highest;
//     this.lowest = lowest;
//     this.average = average;
//   }
// };

// function kalkulasi(arrStd) {
//   let arrAge = [];
//   arrStd.map((val) => arrAge.push(val.age));
//   // console.log(arrAge);
//   let minAge = Math.min(...arrAge);
//   let maxAge = Math.max(...arrAge);
//   let avgAge = (arrAge.reduce((a, b) => a + b) / arrAge.length).toFixed(2);

//   // console.log(minAge);
//   // console.log(maxAge);
//   // console.log(avgAge);

//   let arrScore = [];
//   arrStd.map((val) => arrScore.push(val.score));
//   console.log(arrScore);
//   let minScore = Math.min(...arrScore);
//   let maxScore = Math.max(...arrScore);
//   let avgScore = (arrScore.reduce((a, b) => a + b) / arrScore.length).toFixed(
//     2
//   );

//   // console.log(minScore);
//   // console.log(maxScore);
//   // console.log(avgScore);

//   let Score = new HLA(maxScore, minScore, avgScore);
//   let Age = new HLA(maxAge, minAge, avgAge);
//   // console.log(Age);

//   return { Score: { ...Score }, Age: { ...Age } };
// }
// console.log(kalkulasi(arrStd));

// ● Create a program to create transaction
// ● Product Class
//  ○ Properties
//      ■ Name
//      ■ Price
// ● Transaction Class
//  ○ Properties
//      ■ Total
//      ■ Product
// ● All product data
// ● Qty
//  ○ Add to cart method → Add product to transaction
//  ○ Show total method → Show total current transaction
//  ○ Checkout method → Finalize transaction, return transaction data

// membuat class product yang berisi prop name dan price
class Product {
  constructor(nama, price) {
    this.Nama = nama;
    this.Price = price;
  }
}
//membuat class TransactionProduct yang berisi extend dari class Product ditambah qty
class TransactionProduct extends Product {
  constructor(nama, price, qty) {
    super(nama, price);
    this.Qty = qty;
  }
}
//membuat class transaction yang berisikan prop total price dan list product
class Transaction {
  Total = 0;
  Products = [];

  //membuat function addToCart sebagai fungsi yang untuk menambahkan barang ke keranjang
  addToCart(nama, price, qty) {
    let Product = new TransactionProduct(nama, price, qty);
    this.Products.push(Product);
    this.Total = 0;
    this.Products.map((val) => {
      this.Total = this.Total + val.Price * val.Qty;
    });
  }
  //membuat function checkout untuk memunculkan total price yang sudah dihitung sebelumnya
  checkout() {
    return `Total price is Rp.${this.Total},00`;
  }
  //membuat function transaction untuk memunculkan list barang yang di beli
  transaction() {
    return this.Products;
  }
}

const transaction = new Transaction();

transaction.addToCart = ("Sabun", 3000, 3);
transaction.addToCart = ("Sikat", 10000, 2);

console.log(transaction.checkout());
console.log(transaction.transaction());
