// bool
let isDone: boolean = false

// string
const word: string = "hello"
let otherWord = "world"

// otherWord = 0 can't assign

//number
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

// array
let list: number[] = [1, 2, 3]

// tuple
let myTuple: [string, number] = ["str", 0] // can't be [0, "str"] and can't be ["str", 0 , 1]

// enum
enum Color {Red, Green, Blue}
let color: Color = Color.Red
console.log(color);

// any
let myAny:any = 4
myAny = "null"
