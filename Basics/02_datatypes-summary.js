// Primitive data types

// String, Number, Boolean, BigInt, null, undefined, Symbol

const numberOne = Symbol("123");
const numberTwo = Symbol("123");
console.log(numberOne === numberTwo);
// o/p => false

const bigNumber = 12821827127182712817281728127182n;

// let temperature01 = 0
// let temperature02 = null
// let temperature03;   undefined

// Non-Primitive (Reference type)

// Array, Object, Function

const myArray = ["a", "b", "c"];
const myObject = {
  name: "Akshay",
  age: 20,
};
const myFunction = function () {
  console.log("Hello basic");
};

console.log(typeof myArray);

// ----------------------------------------------------

//  Stack (Primitive), Heap (Non-Primitive)

// Stack
let valueOne = "Akshay";

let valueTwo = valueOne;

valueTwo = "Rohit";

console.log(valueOne);
console.log(valueTwo);

// Heap

let objOne = {
  name: "Pedri",
  age: 19,
};

let objTwo = objOne;

objTwo.name = "Gavi";

console.log(objOne.name);
console.log(objTwo.name);
