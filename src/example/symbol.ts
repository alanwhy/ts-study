// const s1 = Symbol()
// console.log(s1)

// const s2 = Symbol()
// console.log(s2)

// console.log(s1 === s2)

// const s3 = Symbol({ a: 'a' })
// console.log(s3)

// const s4 = Symbol('lison')

// console.log(s4.toString())
// console.log(Boolean(s4))
// console.log(!s4)

let prop = 'name'
const info = {
    // name: 'lison'
    [`my${prop}is`]: 'lison'
}
// console.log(info)

const s5 = Symbol('name')
const info2 = {
    [s5]: 'lison',
    age: 18,
    sex: 'man'
}
// console.log(info2)
info2[s5] = 'haha'
// console.log(info2)
// info2.s5 = 'lison'

for (const key in info2) {
    // console.log(key)
}

// console.log(Object.keys(info2))

// console.log(Object.getOwnPropertyNames(info2))

// console.log(JSON.stringify(info2))

// console.log(Object.getOwnPropertySymbols(info2))

// console.log(Reflect.ownKeys(info2))

// Symbol.for() Symbol.keyFor()

const s6 = Symbol('lison')
const s7 = Symbol('lison')

const s8 = Symbol.for('lison')
// const s9 = Symbol.for('lison')
// const s10 = Symbol.for('haha')

// console.log(Symbol.keyFor(s8))

// instanceof
const obj1 = {
    [Symbol.hasInstance] (otherObj) {
        console.log(otherObj)
    }
}
// console.log({ a: 'a' } instanceof <any>obj1)

// let arr = [1, 2]
// console.log([].concat(arr, [3, 4]))
// console.log(arr[Symbol.isConcatSpreadable])
// arr[Symbol.isConcatSpreadable] = false
// console.log([].concat(arr, [3, 4]))
// console.log(arr[Symbol.isConcatSpreadable])

class C extends Array {
    constructor (...args) {
        super(...args)
    }
    static get [Symbol.species] () {
        return Array
    }
    getName () {
        return 'lison'
    }
}
const c = new C(1, 2, 3)
const a = c.map(item => item + 1)
// console.log(a)
// console.log(a instanceof C)
// console.log(a instanceof Array)

let obj3 = {
    [Symbol.match] (string) {
        // console.log(string.length)
    },
    [Symbol.split] (string) {
        // console.log('split', string.length)
    }
}
'abcde'.match(<RegExp>obj3)

// Symbol.replace
// Symbol.search
// Symbol.split

'abcde'.split(<any>obj3)

let obj4: unknown = {
    [Symbol.toPrimitive] (type) {
        console.log(type)
    }
}
// const res = (obj4 as number)++
// const res = `abc${obj4}`

let obj5 = {
    get [Symbol.toStringTag] () {
        return 'lison'
    }
}
// console.log(obj5.toString())

const obj6 = {
    a: 'a',
    b: 'b'
}
console.log(Array.prototype[Symbol.unscopables])