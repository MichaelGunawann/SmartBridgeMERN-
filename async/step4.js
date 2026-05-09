console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

//Microtask (Promise) dijalankan lebih dulu daripada macrotask (setTimeout).