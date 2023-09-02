// Basic types
let id: number = 5;
let company: string = "Sahil-codess"
let isPublished: boolean = false
let x: any = 'hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// Tuples
let person: [number, string, boolean] = [1, 'Sahilkhan', true]
// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Sahilkhan'],
    [2, 'Qais'],
    [3, 'Erfan']
]

// Unions
let pId: string | number

pId = 'str'

// enums
enum Direction1 {
    Up =1,
    Down,
    Left,
    Right
}
console.log(Direction1)

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2)

// Objects
type User = {
    id: number,
    name: string,
}

let user: User = {
    id: 1,
    name: 'Sahilkhan'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions

function addNumber (x: number, y: number): number {
    return x + y
}

console.log(addNumber(1, 2))