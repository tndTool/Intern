// 1. JavaScript let:
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

// 2. JavaScript const:
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10

// 3. Arrow Functions:
// ES5
var x = function (x, y) {
  return x * y;
};

// ES6
const x = (x, y) => x * y;

// 4. The Spread (...) Operator:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

// 5. The For/Of Loop:
for (variable of iterable) {
  // code block to be executed
}

// Example:
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}

// 6. JavaScript Maps:
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits);

// 7. JavaScript Sets:
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);

// 8. JavaScript Classes:
class ClassName {
  constructor() {}
}

// Example:
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

// 9. JavaScript Promises:
const myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);

// 10. The Symbol Type:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let id = Symbol("id");
person[id] = 140353;
// Now person[id] = 140353
// but person.id is still undefined

// 11. Default Parameter Values:
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15

// 12. Rest Parameter:
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(1, 2, 3, 4);

// 13. String.includes():
let text1 = "Hello world, welcome to the universe.";
text1.includes("world"); // Returns true

// 14. String.startsWith()
let text2 = "Hello world, welcome to the universe.";

text2.startsWith("Hello"); // Returns true

// 15. String.endsWith():
var text3 = "John Doe";
text3.endsWith("Doe"); // Returns true

// 16. Array.from():
Array.from("ABCDEFG"); // Returns [A,B,C,D,E,F,G]

// 17. Array keys():
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits1.keys();

let text5 = "";
for (let x of keys) {
  text5 += x + "<br>";
}

// 18. Array findIndex():

// 19. New Math Methods:
Math.trunc();
Math.sign();
Math.cbrt();
Math.log2();
Math.log10();

// 20. New Number Properties:
EPSILON;
MIN_SAFE_INTEGER;
MAX_SAFE_INTEGER;

// 21. New Global Methods:
isFinite();
isNaN();

// 22. Object entries():
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits2.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}

// 23. Modules:
import { name, age } from "./person.js";
