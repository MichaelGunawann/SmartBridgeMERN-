const student = "Michael";
let age = 20;
age = 21;

const greet = student => `Hello, ${student}`;
console.log(greet(student));

const score = 95;
console.log(`Student: ${student}, Score: ${score}`);

const person = {
    name: "Michael",
    age: 20
};

const { name, age: personAge } = person;
console.log(name);
console.log(personAge);

const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

const user = {
    name: "Michael",
    age: 20
};

const updatedUser = {
    ...user,
    age: 21
};

console.log(updatedUser);

const sayHi = (name = "Guest") => `Hello, ${name}!`;
console.log(sayHi());
console.log(sayHi("Michael"));