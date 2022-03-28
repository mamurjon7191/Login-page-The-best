"use strict";

// let Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };
// Person.prototype.ism = function () {
//   console.log(this.name);
// };

// let oddi = new Person("sar", 23);

// let Teacher = function (name, age, lavozim, boyi, oylik) {
//   Person.call(this, name, age);
//   this.lavozim = lavozim;
//   this.boyi = boyi;
//   this.oylik = oylik;
// };

// Teacher.prototype = Object.create(Person.prototype);

// Teacher.prototype.convert = function (f) {
//   return this.oylik / f;
// };

// let mamur = new Teacher("Mamur", 32, "Director", 180, 2000000);

// console.log(mamur.ism());

// console.log(mamur.convert(10000));

// // #890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890

// // class Person {
// //   constructor(name, age, age1) {
// //     this.name = name;
// //     this.age = age;
// //     this.age1 = age1;
// //   }
// //   find() {
// //     return this.age;
// //   }
// //   func() {
// //     return this.name;
// //   }
// // }

// // class Teacher extends Person {
// //   constructor(ism, yosh, era, oylik) {
// //     super(ism, yosh, era);
// //   }
// // }

// // let umid = new Teacher("Mamur", 3564, 34);

// // console.log(umid.find());

// // console.log(umid.func());

// // #890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890

// // const Phone = {
// //   help(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   },
// //   qush(anna, julia) {
// //     this.anna = anna;
// //     return this.anna;
// //   },
// // };

// // let one = Object.create(Phone);

// // one.boshqa = function (ism, yosh, fakultet) {
// //   console.log(this);
// //   return Phone.qush.call(this, ism, yosh);
// // };
// // console.log(one);

// // console.log(one.boshqa("fun", 34));

// // #890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890

// class University {
//   #pincode;
//   #name;
//   constructor(name, soni, pincode) {
//     this.#name = name;
//     this.soni = soni;
//     this.#pincode = pincode;
//   }
//   #pinniOzgar(val) {
//     this.#pincode = val;
//   }
//   pinniOzgarAgain(val) {
//     this.#pincode = val;
//   }
// }

// let tatu = new University("TATU", 1, 3432);

// class Local extends University {
//   constructor(name, soni) {
//     super(name, soni);
//   }
// }
// let tatu1 = new Local("TATU11", 11, 3432);

// console.log(tatu1);\

///  Qaytarish Qaytarish Qaytarish Qaytarish Qaytarish Qaytarish Qaytarish Qaytarish
//#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890

//This is the first way to make inheritancce in konstruktor functions baby
// let Func = function (name, age) {
//   this.age = age;
//   this.name = name;
// };

// Func.prototype.change = function (di) {
//   return this.age;
// };
// let mamur = new Func("anvar", 3);

// let Child = function (name, age, fun) {
//   Func.call(this, name, age);
//   this.fun = fun;
// };

// Child.prototype = Object.create(Func.prototype);

// Child.prototype.organDal = function () {
//   return this.fun;
// };
// let sardor = new Child("sardor", 34, 3123);
// console.log(sardor.organDal());

//#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890
// #890#890 klass larda inheritance qilmoqchi bolsak extends dib yozsak bu hamma propertylarini otkazadi super field larni otkazadi
//This is the first way to make inheritancce in class expression baby

// class Feature {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   great() {
//     return this.name;
//   }
// }
// let mamur = new Feature("John", 43);

// class FeatureChild extends Feature {
//   constructor(na, de) {
//     // super(na, de);
//   }
// }

// let how = new FeatureChild("hill", 34);
// console.log(how);

//#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890

//Endi uchinchi usulgaham yetib keldik

// class Func {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   findName() {
//     console.log(this.name);
//   }
//   changeName(val, ket) {
//     this.name = val;
//     this.age = ket;
//     return this;
//   }
// }

// let bekzod = new Func("Abdunazar", 34);

// bekzod.changeName("MAMUR", 67).findName();

// function viralAdvertising(n) {
//   let b = 2;
//   let q = 1.5;
//   let arr = [2];
//   for (let i = 0; i < n - 1; i++) {
//     arr.push(Math.floor(b * q));
//     b = Math.floor(b * q);
//   }
//   return arr.reduce(function (val, yeg) {
//     return val + yeg;
//   }, 0);
// }
// console.log(viralAdvertising(5));
//#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890#890
let change = document.querySelector(".direct");
let big = document.querySelector(".form");
let one = document.querySelector(".one1");
let two = document.querySelector(".two1");

console.log(one, two);
change.addEventListener("click", function () {
  change.classList.toggle("aylanish1");
  change.classList.toggle("aylanish");
  one.classList.toggle("birinchi");
  two.classList.toggle("ikkinchi");
});
