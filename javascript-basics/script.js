// Variable declaration using var, let, and const
var a = 5;
let b = 9;
const c = 10;

// Display variable values
console.log(a);
console.log(b);
console.log(c);

// Different data types
let score = 100;           // number
let name = "Michael";      // string
let alumni = false;        // boolean
let gpa = [3.5, 3.8, 4.0]; // array

// Object data type
let student = {
    name: "John Doe",
    age: 20
};

// Display values
console.log(name);
console.log(alumni);
console.log(gpa[0]);
console.log(gpa.length);
console.log("The age of " + student.name + " is " + student.age);

// Check data types using typeof
console.log(typeof score);
console.log(typeof name);
console.log(typeof alumni);
console.log(typeof gpa);
console.log(typeof student);

// Arithmetic operators
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Conditional logic using comparison and logical operators
if (score > 90 && alumni == false) {
    console.log("Excellent!");
} else if (score > 80 || alumni == true) {
    console.log("Great job!");
} else {
    console.log("Keep trying!");
}

// Comparison operators
console.log(a == b);
console.log(a > b);
console.log(a < b);

// Logical operators
console.log(a > b && b > c);
console.log(a > b || b > c);
console.log(!(a > b));