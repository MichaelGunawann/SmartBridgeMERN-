console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

//Promise masuk ke microtask queue dan dijalankan setelah synchronous code selesai. 