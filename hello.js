/* console.log("Hello world");
let time=1;
let int = setInterval(()=>{
    console.log(time);
    time++;
    if(time>5) clearInterval(int);
},1000); */

const fs=require("fs");
fs.readFile("example.txt","utf-8", (err,data)=>{
    if(err){
        console.log("Błąd podczas odczytu pliku: ", err);
    }
    else{
        console.log(data);
    }
});