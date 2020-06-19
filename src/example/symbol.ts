const s = Symbol()

const s2 = Symbol()

const s3 = Symbol('alanwhy')

const s4 = Symbol(123)

// console.log(s4.toString());
// console.log(Boolean(s4));
// console.log(!s4);

let prop = 'name'

const info = {
  // name: "alanwhy"
  // [prop]: "alanwhy"
  [`my${prop}`]: "alanwhy"
}

const s5 = Symbol('name')

const info2 = {
  [s5]: 'alanwhy',
  age: 12,
  sex: "man"
}

// console.log(info2);

// 无法遍历symbol

// for (const key in info2) {
//   console.log(key);
// }

// console.log(Object.keys(info2));

// console.log(Object.getOwnPropertyNames(info2));

// console.log(JSON.stringify(info2));


// 如何遍历

// console.log(Object.getOwnPropertySymbols(info2));

// console.log(Reflect.ownKeys(info2));

// Symbol.for() Symbol.keyFor()

const s6 = Symbol("alanwhy")

const s7 = Symbol.for('alanwhy')

const s8 = Symbol.for('alanwhy')

// console.log(s7 === s8);
// console.log(Symbol.keyFor(s6));

// console.log(Symbol.keyFor(s7));


// 内置的symbol值

// console.log(Symbol.hasInstance);

// instanceof

// const obj1 = {
//   [Symbol.hasInstance](otherobj) {
//     console.log(otherobj);
//   }
// }
// console.log({ a: "a" } instanceof <any>obj1);

// console.log(Symbol.isConcatSpreadable);

let arr1 = [1, 2]
// console.log([].concat(arr1, [3, 4]));
arr1[Symbol.isConcatSpreadable] = false
// console.log([].concat(arr1, [3, 4]));


class C extends Array {
  constructor(...args) {
    super(...args)
  }
  static get [Symbol.species]() {
    return Array
  }
  getName() {
    return 'alanwhy'
  }
}

const c = new C(1, 2, 3)
const a = c.map(item => item + 1)
// console.log(a);
// console.log(a instanceof C);
// console.log(a instanceof Array);

// Symbol.match

let obj3 = {
  [Symbol.match](string) {
    console.log(string.length);

  },
  [Symbol.split](string) {
    console.log('split', string.length);
  }
}

// 'abcde'.match(<RegExp>obj3)

// 'abcde'.split(<any>obj3)

// Symbol.replace
// Symbol.search
// Symbol.split


// Symbol.iterator

// Symbol.toPrimitive

let obj4: unknown = {
  [Symbol.toPrimitive](type) {
    console.log(type);
  }
}

// const res = (obj4 as number)++
const res = `abc${obj4}`
// console.log(res);

// Symbol.toStringTag

let obj5 = {
  // [Symbol.toStringTag]: "alanwhy"
  get [Symbol.toStringTag]() {
    return "alanwhy"
  }
}

// console.log(obj5.toString());


// Symbol.unscopables

const obj6 = {
  a: "a",
  b: "b"
}

console.log(Array.prototype[Symbol.unscopables]);
