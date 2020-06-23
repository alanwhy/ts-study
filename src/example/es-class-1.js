// es5的写法
/* function Point(x, y) {
  this.x = x
  this.y = y
}
Point.prototype.getPostion = function () {
  return this.x + ',' + this.y
}
var p1 = new Point(2, 3)
console.log(p1);
console.log(p1.getPostion()); */

// es6
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getPostion() {
    return `${this.x}，${this.y}`
  }
}
const p1 = new Point(1, 2)
console.log(p1);


// var info = {
//   _age: 10,
//   set age(newValue) {
//     if (newValue > 18) {
//       console.log("old");
//     } else {
//       console.log("young");
//     }
//   },
//   get age() {
//     console.log("age");
//     return this._age
//   }
// }

// console.log(info.age);
// info.age = 17
// info.age = 19

class Info {
  constructor(age) {
    this._age = age
  }
  set age(newAge) {
    this._age = newAge
  }

  get age() {
    return this._age
  }
}
const infos = new Info(18)
infos.age = 17
console.log(infos.age);




// const func = function () { }
// function func2() { }

// class Infos {
//   constructor() { }
// }

// const Infos = class c {
//   constructor() { }
// }

const Infos = class {
  constructor() { }
}
const testInfo = new Infos()


// 静态方法

class Points {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  getPostion() {
    return `${this.x},${this.y}`
  }
  static getClassName() {
    return Points.name
  }
}

const p = new Points(1, 2)
console.log(p.getPostion());
console.log(Points.getClassName());


// 实例属性其他写法

class Point2 {
  constructor(x) {
    this.x = x
  }
}
Point2.y = 2
const p2 = new Point2(3)
console.log(p2.x);
console.log(p2.y);



// 私有方法

const _func2 = () => { }

class Point3 {
  func1() {
    _func2.call(this)
  }
  // _func2() { }
}

const p3 = new Point3()
// p._func2()
_func2()

const func1 = Symbol("fun1")

export default class Point5 {
  static [func1]() { }
}


// 私有属性

// class Point6 {
//   #ownProp = 12
// }


// new.target

function Point7() {
  console.log(new.target);

}
const p7 = new Point7()
const p78 = Point7()

class Point8 {
  constructor() {
    console.log(new.target);

  }
}

const p8 = new Point8()