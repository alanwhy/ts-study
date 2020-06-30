// ES5中的继承
function Food() {
  this.type = "food"
}
Food.prototype.getType = function () {
  return this.type
}
function Vegetables(name) {
  this.name = name
}
Vegetables.prototype = new Food()
const tomato = new Vegetables('tomato')
console.log(tomato.getType());

// ES6中类的继承
class Parent {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
  static getNames() {
    return this.name
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}
const c = new Child('alan', 18)
console.log(c);
console.log(c.getName());
console.log(c instanceof Child);
console.log(c instanceof Parent);
console.log(Child.getNames());


