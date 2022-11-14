const os = require("os")    // this line to import os

console.log("free RAM mem", os.freemem()/1024/1024/1024);
console.log("total RAM mem", os.totalmem()/1024/1024/1024);
console.log("version", os.version());
console.log("Processor", os.cpus());