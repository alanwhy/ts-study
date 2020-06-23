// 泛型
const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value)
}

getArray<number>(3, 4)
getArray<string>('abc', 4)

const getArray2 = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
  return new Array(times).fill([param1, param2])
}

getArray2(1, "a", 3)


let getArray3: <T>(arg: T, times: number) => T[]
getArray3 = (arg: any, times: number) => {
  return new Array(times).fill(arg)
}

getArray3(123, 3)

type GetArray = <T>(arg: T, times: number) => T[]

let getArray4: GetArray = (arg: any, times: number) => {
  return new Array(times).fill(arg)
}

// interface GetArray2 {
//   <T>(arg: T, times: number): T[]
// }

// interface GetArray2<T> {
//   (arg: T, times: number): T[],
//   array: T[]
// }

type GetArray2 = <T>(arg: T, times: number) => T[]



// 泛型约束
interface ValueWithLength {
  length: number
}

const getArray5 = <T extends ValueWithLength>(arg: T, times): T[] => {
  return new Array(times).fill(arg)
}

getArray5([1, 2], 3)
// getArray5(13, 3)
getArray5("123", 2)


// 泛型约束 使用类型参数

const getProps = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName]
}

const objs = {
  a: "a", b: "b"
}

getProps(objs, "a")
// getProps(objs, "c")