// boolean
let bool: boolean = false


// number
let num: number = 123
num = 0b1111011
num = 0o173
num = 0x7b

// string
let str: string = 'abc'
str = `num is ${num}`
// console.log(str);

// array
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: (string | number)[] = [1, ""]

// 元祖类型
let tuple: [string, number, boolean]
tuple = ["a", 1, true]

// 枚举
enum Roles {
  SUPER_ADMIN = 1,
  ADMIN = 3,
  USER = 8
}

// console.log(Roles[1]);
// console.log(Roles.USER);

// any类型
let value: any
value = "abc"
value = 123
value = false

const arr4: any[] = [1, "a"]

// void类型

const consoleText = (text: string): void => {
  console.log(text);
}

let v: void
v = null
// consoleText(123)
// consoleText("aa")

// null 和 undefined

let u: undefined
let n: null = null

// never类型

const errorFunc = (msg: string): never => {
  throw new Error(msg)
}

const infiniteFunc = (): never => {
  while (true) { }
}

const neverVariable = (() => {
  while (true) { }
})


// object
let obj = {
  name: "alanwhy"
}

function getObject(obj: object): void {
  console.log(obj);
}

getObject(obj)

// 类型断言
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}

// getLength("123")