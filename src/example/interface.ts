interface NameInfo {
  firstName: string,
  lastName: string
}

const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}


getFullName({
  firstName: "hh",
  lastName: "11"
})

// 多选 和 可选
interface Vegetable {
  color?: string,
  readonly type: string,
  [prop: string]: any
}


const getVegetables = ({ color, type }: Vegetable) => {
  return `A ${color ? (color + ' ') : ''}${type}`
}

getVegetables({
  color: "red",
  type: "tomato",
  size: 2
})

let vegetableObj: Vegetable = {
  type: "tomato"
}

// vegetableObj.type = "va"

interface ArrInter {
  0: number,
  readonly 1: string
}

let arr5: ArrInter = [1, "a"]

// interface AddFunc {
//   (num1: number, num2: number): number
// }

type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (n1, n2) => n1 + n2

// interface RoleDic {
//   [id: number]: string
// }

// const role1: RoleDic = {
//   0: "superman"
// }

interface RoleDic {
  [id: string]: string
}

const role1: RoleDic = {
  a: "admin",
  1: "super_admin"
}

// 接口继承

interface Vegetables {
  color: string
}
interface Tomato extends Vegetables {
  radius: number
}
interface Carrot extends Vegetables {
  length: number
}

const tomato: Tomato = {
  radius: 1,
  color: "red"
}

const carrot: Carrot = {
  length: 1,
  color: "orange"
}

// 混合类型接口

interface Counter {
  (): void,
  count: number
}

const getCounter = (): Counter => {
  const c = () => { c.count++ }
  c.count = 0
  return c
}

const counter: Counter = getCounter()