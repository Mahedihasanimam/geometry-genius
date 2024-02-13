// function clickMe(){
// const b=document.getElementById('triangle-b');
// const h=document.getElementById('triangle-h');
// const aria=parseFloat(0.5*b.value*h.value);
// const addAria=document.getElementById('addAria');
// addAria.innerText=aria
// }
// function clickMe1(){
// const b=document.getElementById('rectangle-w');
// const h=document.getElementById('rectangle-i');
// const aria=parseFloat(b.value*h.value);
// const addAria=document.getElementById('addAria1');
// addAria.innerText=aria
// }
// function clickMe2(){
// const b=document.getElementById('Parallelogram-b');
// const h=document.getElementById('Parallelogram-h');
// const aria=parseFloat(b.value*h.value);
// const addAria=document.getElementById('addAria2');
// addAria.innerText=aria
// }

// function clickMe3(){
//     const b=document.getElementById('Rhombus-d1');
//     const h=document.getElementById('Rhombus-d2');
//     const aria=parseFloat(0.5*b.value*h.value);
//     const addAria=document.getElementById('addAria3');
//     addAria.innerText=aria
//     }
// function clickMe4(){
//     const b=document.getElementById('Pentagon1-p');
//     const h=document.getElementById('Pentagon1-h');
//     const aria=parseFloat(0.5*b.value*h.value);
//     const addAria=document.getElementById('addAria4');
//     addAria.innerText=aria
//     }
// function clickMe5(){
//     const b=document.getElementById('Ellipse-a');
//     const h=document.getElementById('Ellipse-b');
//     const aria=parseFloat(3.142*b.value*h.value);
//     const addAria=document.getElementById('addAria5');
//     addAria.innerText=aria
//     }

// get input function
function getInput(inputnumber){
    const inp=document.getElementById(inputnumber);
    const text=inp.value;
    const output=parseFloat(text);
    return output;
}
// inner text function 
function setText(text,aria){
    const inerText=document.getElementById(text);
    const theText=inerText.innerText=aria;
    return theText;
}
//triangle
function clickMe(){
    const height=getInput('triangle-b');
    const width=getInput('triangle-h');
    const result=0.5*height*width;
    setText('addAria',result)
};
// ractingle
function clickMe1(){
    const inp=getInput('rectangle-w');
    const inp2=getInput('rectangle-i');
    const result=inp*inp2;
    setText('addAria1',result);
}
// Parallelogram
function clickMe2(){
    const inp=getInput('Parallelogram-b');
    const inp2=getInput('Parallelogram-h');
    const result=inp*inp2;
    setText('addAria2',result);
}
// Rhombus
function clickMe3(){
    const inp=getInput('Rhombus-d1');
    const inp2=getInput('Rhombus-d2');
    const result=0.5*inp*inp2;
    setText('addAria3',result);
}
// Rhombus
function clickMe4(){
    const inp=getInput('Pentagon1-p');
    const inp2=getInput('Pentagon1-h');
    const result=0.5*inp*inp2;
    setText('addAria4',result);
}
function clickMe5(){
    const inp=getInput('Ellipse-a');
    const inp2=getInput('Ellipse-b');
    const result=3.14*inp*inp2;
    setText('addAria5',result);
}