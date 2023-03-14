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

let Student = class {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
    // this.age = new Date() - new Date(birthdate)
  }
};

let student1 = new Student("Wahyu", "wahyuyuyu@gmail.com", "22", "80");
let student2 = new Student("Morgan", "morgangan@gmail.com", "24", "75");
let student3 = new Student("Busti", "bustiti@gmail.com", "25", "60");
let student4 = new Student("Mamat", "mamatmat@gmail.com", "19", "90");
let student5 = new Student("Tobi", "tobibi@gmail.com", "27", "100");
let student6 = new Student("Boni", "tobibi@gmail.com", "12", "40");

// console.log(student3);

let array1 = [student1, student2, student3, student4, student5];
// console.log(array1);

function result(array1) {
  let arrAge = [];
  array1.map((val) => arrAge.push(val.age));
  console.log(arrAge);
  // console.log(arrAge);
  let minAge = Math.min(...arrAge);
  let maxAge = Math.max(...arrAge);
  let sumAge = arrAge.reduce((a, b) => parseInt(a) + parseInt(b));
  let avgAge = sumAge / arrAge.length;
  // console.log(minAge);
  // console.log(maxAge);
  // console.log(avgAge);

  let arrScore = [];
  array1.map((val) => arrAge.push(val.score));
  // console.log(arrScore);
  let minScore = Math.min(...arrAge);
  let maxScore = Math.max(...arrAge);
  let sumScore = arrAge.reduce((a, b) => parseInt(a) + parseInt(b));
  let avgScore = sumScore / arrAge.length;
  // console.log(minScore);
  // console.log(maxScore);
  // console.log(avgScore);

  let HLA = class {
    constructor(highest, lowest, average) {
      this.highest = highest;
      this.lowest = lowest;
      this.average = average;
    }
  };

  // let score = new HLA(maxScore,minScore,avgScore);
  // let age = new HLA(maxAge,minAge,avgAge);

  let score = new HLA(maxScore, minScore, avgScore);
  // console.log(score);
  let age = new HLA(maxAge, minAge, avgAge);
  // console.log(age);
  return { Score: { ...score }, Age: { ...age } };
}
console.log(result(array1));

// const key = Object.keys(student2);
// console.log(key);
// for (const []of Object.entries(student2));
// console.log(key);
// console.log(value);

// Create a program to create transaction
//  ● Product Class
//      ○ Properties
//          ■ Name
//          ■ Price
// ● Transaction Class
//      ○ Properties
//          ■ Total
//          ■ Product
//              ● All product data
//              ● Qty
//      ○ Add to cart method → Add product to transaction
//      ○ Show total method → Show total current transaction
//      ○ Checkout method → Finalize transaction, return transaction data

// class Product {
//     constructor(productName,price) {
//     this.productName = productName;
//     this.price = price
//     }
// }

// class Transaction extends Product {
//     constructor(productName,price,qty,total) {
//     super(productName,price)
//     this.qty = qty;
//     this.total = qty * price;

//     }
// }

// let beli1 = new Transaction('Galon','50000','2')
// let beli2 = new Transaction('Sabun','7000','4')

// let arrPembelian = [beli1,beli2]
// console.log(arrPembelian);

// function calculate(arrPembelian = []) {
//     const findTotal = (AbstractRange)
// }

class Product {
  constructor(name, price) {
    this.Name = name;
    this.Price = price;
  }
}

class TransactionProduct extends Product {
  constructor(name, price, qty) {
    super(name, price);
    this.Qty = qty;
  }
}

class Transaction {
  #Total = 0;
  #Products = [];

  addToCart(name, price, qty) {
    let product = new TransactionProduct(name, price, qty);
    this.#Products.push(product);
    this.#Total = 0;
    this.#Products.map((val) => {
      this.#Total = this.#Total + val.Price * val.Qty;
    });
  }

  checkout() {
    return `Rp ${this.#Total.toLocaleString("id-ID")}`;
  }

  transaction() {
    return this.#Products;
  }
}

const transaction = new Transaction();

transaction.addToCart("botol", 5000, 3);
transaction.addToCart("bantal", 2000, 3);

console.log(transaction.checkout());
console.log(transaction.transaction());
