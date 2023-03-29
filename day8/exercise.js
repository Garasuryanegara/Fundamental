//1. Exercise - Employee Salary

class Employee {
  constructor(name, position, age) {
    this.name = name;
    this.position = position;
    this.age = age;
  }
}
class Salary extends Employee {
  #hour;
  constructor(name, position, age, hour, type) {
    super(name, position, age);
    this.#hour = hour;
    this.type = type;
  }
  add(hour) {
    this.hour = hour;
  }
  total() {
    let sisa = this.hour - 6 < 0 ? 0 : this.hour - 6;
    let workHour = this.hour - 6 > 0 ? 6 : this.hour;

    let base = 0;
    let overTime = 0;
    if (this.type === "PartTime") {
      base = 50000;
      overTime = 30000;
    } else {
      base = 100000;
      overTime = 75000;
    }
    return "Rp." + (base * workHour + sisa * overTime).toLocaleString("id-ID");
  }
}

let employee1 = new Salary("Agus", "Staff", "43", " ", "FullTime");
let employee2 = new Salary("Wardi", "Staff", "25", " ", "PartTime");
employee1.add(7);
employee2.add(12);
console.log(employee1.total());
console.log(employee2.total());

console.log("__________________________________");

//2. Exercise - Shooting Game

class Player {
  constructor(nama) {
    this.nama = nama;
    this.health = 100;
    this.power = 10;
  }
  hit(Player) {
    Player.health -= this.power;
  }
  useItem(object) {
    this.power += object.power;
    this.health += object.health;
  }
  showStatus() {
    return `${this.nama} (Health => ${this.health}, Power => ${this.power})`;
  }
}

class Shooting {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getItem() {
    let random = Math.floor(Math.random() * 4);
    if (random == 0) {
      return { health: 0, power: 0 };
    } else if (random == 1) {
      return { health: 10, power: 0 };
    } else if (random == 2) {
      return { health: 0, power: 10 };
    } else {
      return { health: 10, power: 10 };
    }
  }
  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
      this.player1.useItem(this.getItem());
      this.player2.useItem(this.getItem());
      this.player1.hit(this.player2);
      this.player2.hit(this.player1);
    }
    if (this.player1.health < 0) {
      console.log(`${this.player2.nama} Win!`);
    } else {
      console.log(`${this.player1.nama} Win!`);
    }
  }
}

let p1 = new Player("gaara");
let p2 = new Player("baara");
let game = new Shooting(p1, p2);
game.start();
