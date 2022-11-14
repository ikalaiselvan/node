// 1. writeFile()
// 2. editFile()
// 3. appendFile()
// 4. unlink()

const fs = require("fs");

const quote = "No beauty shines brighter than that of a good heart";

// 1. new file will create at same folder:
// fs.writeFile("./sample.html", quote, (err) => {
//   console.log("writing completed")
// })

// 2. new file will create at another folder:
// fs.writeFile("./kalai/sample.html", quote, (err) => {
//   console.log("writing completed")
// })

// 3. To create more files at that time:
const quote2 = "live more,  worry less";

// for(i = 1; i<=10; i++){
// fs.writeFile(`./kalai/quote${i}.txt`, quote2, (err) => {
//   console.log("completed to write");
// })
// }

// 4. To create more files at that time quantity of files taken from terminale:
// const [ , , inputFileQuantity] = process.argv

// for(i = 1; i<=inputFileQuantity; i++){
//   fs.writeFile(`./kalai/quote${i}.txt`, quote2, (err) => {
//     console.log("completed to write");
//   })
//   }

// 5. To read files:
// fs.readFile("./kalai/kala.txt", "utf-8", (err, data)=> {
//   if(err){
//     console.log(err, "❌")
//   }else{
//     console.log(data)
//   }
// })

// 6. To write files:
// fs.appendFile("./sample.html", quote2 + "\n", (err) => {
//   console.log("write completed")
// })

// 6. To delete files:
fs.unlink("./sample.html", (err)=>{
  console.log("deleting completed")
})