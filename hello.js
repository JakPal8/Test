/* console.log("Hello world");
let time=1;
let interval = setInterval(()=>{
    console.log(time);
    time++;
    if(time>5) clearInterval(interval);
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

//nowa funkcja
function nowaFunkcja(){
    let czas=new Date();
    console.log((czas.getHours()<10 ? "0"+czas.getHours() : czas.getHours())
    +":"+(czas.getMinutes<10 ? "0"+czas.getMinutes() : czas.getMinutes())+
    ":"+(czas.getSeconds()<10 ? "0"+czas.getSeconds() : czas.getSeconds()));
}
setInterval(nowaFunkcja,1000);