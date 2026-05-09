console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

//Walaupun delay-nya 0ms, setTimeout() tetap dijalankan setelah semua kode synchronous selesai.