// 组合式继承
// function SuperType(name) {
//   this.name = name;
// }

// SuperType.prototype.getName = function () {
//   return this.name;
// }

// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age
// }

// let subproto = Object.create(SuperType.prototype)
// subproto.constructor = SubType;
// SubType.prototype = subproto;

// subproto.getAge = function () {
//   return this.age;
// }

// let person = new SubType('liu', 25);
// console.log(person.getName());


// es6
class SuperType {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class SubType extends SuperType {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

let sub = new SubType('liu', 25);
console.log(sub);
