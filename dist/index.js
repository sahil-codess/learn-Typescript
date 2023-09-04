"use strict";
// Basic types
let id = 5;
let company = "Sahil-codess";
let isPublished = false;
let x = 'hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuples
let person = [1, 'Sahilkhan', true];
// Tuple Array
let employee;
employee = [
    [1, 'Sahilkhan'],
    [2, 'Qais'],
    [3, 'Erfan']
];
// Unions
let pId;
pId = 'str';
// enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
let user = {
    id: 1,
    name: 'Sahilkhan'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 2));
// Void type for functions that don't return
function log(message) {
    console.log(message);
}
log('Hey there void function');
let user1 = {
    id: 1,
    name: 'Sahilkhan'
};
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const qais = new Person(1, "Qais");
// console.log(qais.register())
// console.log(qais)
// SubClasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, 'Sahilkhan Ahmadzai', 'Developer');
// console.log(emp)
// console.log(emp.register())
