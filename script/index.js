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

function clickMe3(){
    const b=document.getElementById('Rhombus-d1');
    const h=document.getElementById('Rhombus-d2');
    const aria=parseFloat(0.5*b.value*h.value);
    const addAria=document.getElementById('addAria3');
    addAria.innerText=aria
    }
function clickMe4(){
    const b=document.getElementById('Pentagon1-p');
    const h=document.getElementById('Pentagon1-h');
    const aria=parseFloat(0.5*b.value*h.value);
    const addAria=document.getElementById('addAria4');
    addAria.innerText=aria
    }
function clickMe5(){
    const b=document.getElementById('Ellipse-a');
    const h=document.getElementById('Ellipse-b');
    const aria=parseFloat(3.142*b.value*h.value);
    const addAria=document.getElementById('addAria5');
    addAria.innerText=aria
    }
