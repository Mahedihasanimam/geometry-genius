function clickMe(){
const b=document.getElementById('triangle-b');
const h=document.getElementById('triangle-h');
const aria=parseFloat(0.5*b.value*h.value);
const addAria=document.getElementById('addAria');
addAria.innerText=aria
}
function clickMe1(){
const b=document.getElementById('rectangle-w');
const h=document.getElementById('rectangle-i');
const aria=parseFloat(b.value*h.value);
const addAria=document.getElementById('addAria1');
addAria.innerText=aria
}
function clickMe2(){
const b=document.getElementById('Parallelogram-b');
const h=document.getElementById('Parallelogram-h');
const aria=parseFloat(b.value*h.value);
const addAria=document.getElementById('addAria2');
addAria.innerText=aria
}
