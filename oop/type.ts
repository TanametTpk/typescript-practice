// custom type
type Style = 'bold' | 'test' | null | number
let myStyle: Style = 'test'

// interface
interface Person {

    firstname: string
    lastname: string
    age: number
    [key: string]: any // will have no autocomplete
}

const person: Person = {
    firstname: "first",
    lastname: "last",
    age: 20
}

const otherPerson: Person = {
    firstname: "first",
    lastname: "last",
    age: 20,
    hello: "world",
    ei: "test"
}

type MyList = [number, string, boolean]

// const arr: MyList = [] error

type MyListNullable = [number?, string?, boolean?]
const arr: MyListNullable = []