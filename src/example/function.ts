// function add1(arg1: number, arg2: number) {
//   return arg1 + arg2;
// }

// const add2 = (arg1: number, arg2: number) => {
//   return arg1 + arg2;
// };

// let add1: (x: number, y: number) => number;
// add1 = (arg1: number, arg2: number): number => {
//   return arg1 + arg2;
// };
// add1 = (arg1: string, arg2: number) => arg1 + arg2;

type Add = (x: number, y: number) => number;
let addFunc;
addFunc = (arg1: number, arg2: number) => arg1 + arg2;

// addFunc = (arg1, arg2, arg3) => arg1 + arg2 + (arg3 ? arg3 : 0);

type AddFunction = (arg1: number, arg2: number, arg3?: number) => number;
// let addFunction: AddFunction;
// addFunction = (x: number, y: number) => x + y;
// addFunction = (x: number, y: number, z: number) => x + y + z;

const addFunctions = (x: number, y = 3) => x + y;

// const handleData = (arg1: number, ...args: number[]) => {
//   // ...
// };

// 函数重载
function handleData(x: string): string[];
function handleData(x: number): number[];
// 函数实体
function handleData(x: any): any {
  if (typeof x === "string") {
    return x.split("");
  } else {
    return x
      .toString()
      .split("")
      .map((item: any) => Number(item));
  }
}
