// ES5中的继承
function Food() {
  this.type = "food";
}
Food.prototype.getType = function () {
  return this.type;
};
function Vegetables(name) {
  this.name = name;
}
Vegetables.prototype = new Food();
const tomato = new Vegetables("tomato");
console.log(tomato.getType());

// ES6中类的继承
class Parent {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  static getNames() {
    return this.name;
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
const c = new Child("alan", 18);
// console.log(c);
// console.log(c.getName());
// console.log(c instanceof Child);
// console.log(c instanceof Parent);
// console.log(Child.getNames());
// console.log(Object.getPrototypeOf(Child) === Parent);

class Parent1 {
  constructor() {
    this.type = "parent";
  }
  getName() {
    return this.type;
  }
}

Parent1.getType = () => {
  return "is parent";
};

class Child1 extends Parent1 {
  constructor() {
    super();
    console.log("constructor" + super.getName());
  }
  getParentName() {
    console.log("getParentName" + super.getName());
  }
  getParentType() {
    console.log("getParentType" + super.getType());
  }
  static getParentType() {
    console.log("getParentType" + super.getType());
  }
}

const c1 = new Child1();
c1.getParentName();
Child1.getParentType();

// prototype
// __proto__

var objs = new Object();
objs.__proto__ === Object.prototype;

// 原生对象的继承

class CustomArray extends Array {
  constructor(...args) {
    super(args);
  }
}

const arr = new CustomArray(3);
console.log(arr);
