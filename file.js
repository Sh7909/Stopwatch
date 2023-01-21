window.onload=function () {
    var timer;
    let x=document.getElementById("seconds");
    x.innerHTML="00";
    let y=document.getElementById("milliseconds");
    y.innerHTML="00";
   
    
}   
clearInterval(timer);  
let startbtn=document.getElementById("start-button");
let stopbtn=document.getElementById("stop-button");
let resetbtn=document.getElementById("reset-button");
startbtn.onclick=function(){
var timer=setInterval(start,1000);
    
}
                //OR startbutton.onclick=function(){}
function start(){
        var d=new Date();
        console.log(d);
        let sec=d.getSeconds();
        let milliseconds=d.getMilliseconds();
        document.getElementById("seconds").innerHTML=sec;
        document.getElementById("milliseconds").innerHTML=milliseconds;
    }
    stopbtn.onclick=function(){
        clearInterval(timer); 
        
    }  
    resetbtn.onclick=function(){
        clearInterval(timer);
        document.getElementById("seconds").innerHTML="00";
        document.getElementById("milliseconds").innerHTML="00";
    }  