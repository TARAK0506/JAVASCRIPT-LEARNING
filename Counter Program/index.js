const decreasebtn=document.getElementById('decrease');
const resetbtn=document.getElementById('reset');
const increasebtn=document.getElementById('increase');
const counter=document.getElementById('counter');

let count=0;

decreasebtn.onclick=function(){
    count--;
    counter.textContent=count;
}
resetbtn.onclick=function(){    
    count=0;
    counter.textContent=count;
}
increasebtn.onclick=function(){     
    count++;
    counter.textContent=count;
}   
