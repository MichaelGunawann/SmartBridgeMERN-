console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

///Synchronous code dijalankan dulu, lalu microtask, lalu macrotask.