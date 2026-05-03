let biodata = ["Alice", 19 , "mahasiswa", false];

console.log(biodata)
biodata.push("Jakarta");
console.log(biodata)
biodata.pop(); 
console.log(biodata)
biodata.shift(); 
console.log(biodata)
biodata.unshift(false); 
console.log(biodata)

console.log(biodata.length)

let student = { 
    name : "Alice",
    age : 19,
    occupation : "mahasiswa", 
    isAlumni : false,
};

console.log(student.name);
console.log(student.age);
console.log(student.occupation);
console.log(student.isAlumni);  


console.log(student["name"]);
console.log(student["age"]);  
console.log(student["occupation"]);
console.log(student["isAlumni"]);

//modify 
student.age = student.age + 1;
console.log(student.age);
student["occupation"] = "banker";
console.log(student["occupation"]);

let numbers = [1, 2, 3, 4, 5];


//map
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("map function " + doubled);

//filter
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
}); 

console.log("filter function " + evenNumbers);

//foreach 
numbers.forEach(function(num) {
    console.log("foreach " + num);
}); 

console.log 

//objects inside arrays 
let students= [
    {name : "Alice", score : 80},
    {name : "Bob", score : 81},
    {name : "Charlie", score : 79},
]

students.forEach(function(student){
    console.log(student.name + " scored " + student.score);
});

let highscores = students.filter(function(student){
    return student.score > 80;
});

console.log("High scores: "  , highscores);