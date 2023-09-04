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

// Void type for functions that don't return
function log(message: string | number): void {
    console.log(message)
}

log('Hey there void function')

// intefaces
interface UserInterface {
    id: number,
    name: string,
    age?: number
}

let user1: UserInterface = {
    id: 1,
    name: 'Sahilkhan'
}

type point = string | number;


// Classes
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`;
    }
}

const qais = new Person(1, "Qais")

// console.log(qais.register())

// console.log(qais)

// SubClasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(1, 'Sahilkhan Ahmadzai', 'Developer')

// console.log(emp)
// console.log(emp.register())

// Generics
function getArray<type>(items: type[]) : type[] {
    return new Array().concat(items)
}

let numArr = getArray([1,2,3,4,5])
let strArr = getArray(["Sahilkhan", "Qais", "Erfan"])

strArr.push('Ahmadzai')