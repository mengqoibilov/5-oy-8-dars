
// constructor function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.fulNmae = function () {
//   return this.name + " " + this.age;
// };
// Person.prototype.course = "course111";

// let user1 = new Person("John", 23);
// let user2 = new Person("Johnbek", 34);
// console.log(user1 instanceof Person);
// // console.log(user1.__proto__ == Person.prototype);
// console.log(user2.course);
// // console.log(user1.age);
// // user1.fullName();
// // user2.fullName();

// let num = new Number(23);

// // console.log(num);
// console.dir(Person);

// ////////////////////////////
// // console.log(person1 instanceof Person); // true
// // default value

// // let age = 90
// // console.dir(age);
// function User(name = "user", email = "exampl@gmial.com") {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.getFullName = function () {
//   return this.name + " " + this.email;
// };

// let user1 = new User();
// console.log(user1.name);

// //////////////////// classes
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} is making  noise.`);
//   }
// }

// let cat = new Animal("Bagira", 3);
// console.log(cat.eat());

//////////////////  4 main consepts of oop(classes)
// 1 Abstraction
// 2 Inheritance
// 3 Polimorphism => overwriting methods
// 4 Incapsulation

// ////////////// inherited classes ( Polimtphism)
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   say() {
//     console.log(`${this.name} is making  noise.`);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }
// //   abstraction
//   say() {
//     console.log(`${this.name} is saying meaw`);
//   }
// }

// let cat1 = new Cat("Bagira", 2, "black");
// // console.log(cat1);
// cat1.say();

////////////////  incapsulation
// class Discount {
//   #moneys = 2000;
//   constructor(discount) {
//     this.discount = discount;
//   }
//   money() {
//     return this.#moneys;
//   }
//   static test() {
//     console.log("test");
//   }
//   getWithDiscount() {
//     return this.#moneys - (this.#moneys * this.discount) / 100;
//   }
// }


// let user = new Discount(10);
// // console.log(user.test());
// Discount.test()




// class MathCalculate {
//     static add(a, b) {
//       return a + b;
//     }
//     static subtract(a, b) {
//       return a - b;
//     }
//     static multiply(a, b) {
//       return a * b;
//     }
//     static divide(a, b) {
//       return a / b;
//     }
//   }
  

//   console.log(MathCalculate.multiply(2, 3));
  









class ToUpperCase {
  static transform(text) {
    return text.toUpperCase();
  }
}

class ToLowerCase {
  static transform(text) {
    return text.toLowerCase();
  }
}

class ReverseText {
  static transform(text) {
    return text.split("").reverse().join("");
  }
}

class CountWords {
  static transform(text) {
    return text.split(" ").filter(word => word !== "").length;
  }
}

class RemoveSpaces {
  static transform(text) {
    return text.split(" ").join("");
  }
}

class CountCharacters {
  static transform(text) {
    return text.length;
  }
}

class IsPalindrome {
  static transform(text) {
    return text === text.split("").reverse().join("");
  }
}

class RepeatText {
  static transform(text, times) {
    return text.repeat(times);
  }
}

class ReplaceVowels {
  static transform(text, replacement) {
    let vowels = "aeiouAEIOU";
    return [...text].map(char => (vowels.includes(char) ? replacement : char)).join("");
  }
}

class CapitalizeWords {
  static transform(text) {
    return text.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  }
}

console.dir(CapitalizeWords);




// class Car {
//   constructor(speed = 0, consumption = 0) {
//     this.speed = speed;  
//     this.consumption = consumption;  
//     this.isRunning = false; 
//     this.fuelLevel = 100; 
//   }

//   start() {
//     this.isRunning = true;
//     console.log("Mashina ishga tushdi!");
//   }

//   move() {
//     if (this.isRunning) {
//       console.log(`Mashina ${this.speed} km/soat tezlikda harakatlanmoqda.`);
//       this.fuelLevel -= this.consumption * 0.1;
//       console.log(`Benzin darajasi: ${this.fuelLevel.toFixed(2)}%`);
//     } else {
//       console.log("Mashina harakatga kelmagan, avval zavod qiling!");
//     }
//   }

//   gas(amount) {
//     if (this.isRunning) {
//       this.speed += amount;
//       console.log(`Tezlik oshirildi: ${this.speed} km/soat.`);
//     } else {
//       console.log("Mashina yurgizilgan holatda bo'lishi kerak!");
//     }
//   }

//   stop() {
//     this.isRunning = false;
//     this.speed = 0;
//     console.log("Mashina to'xtatildi.");
//   }

//   consumption() {
//     console.log(`Benzin sarfi: ${this.consumption} litr/100km.`);
//   }

//   checkFuel() {
//     console.log(`Benzin darajasi: ${this.fuelLevel.toFixed(2)}%`);
//   }
// }


// const car = new Car(50, 7);
// car.start();        
// car.move();            
// car.gas(20);           
// car.consumption();    
// car.checkFuel();     
// car.stop();           

