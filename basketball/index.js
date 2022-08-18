let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');

let count = 0;
let count2 = 0;

function one(){
    count=count+1;
    box1.textContent = count;
}

function two(){
    count=count+2;
    box1.textContent = count; 
}

function tree(){
    count=count+3;
    box1.textContent = count; 
}


function one2(){
    count2=count2+1;
    box2.textContent = count2;
}

function two2(){
    count2=count2+2;
    box2.textContent = count2; 
}

function tree2(){
    count2=count2+3;
    box2.textContent = count2; 
}

let stateRefresh=document.getElementById('refresh');

function refresh(){
    count=0;
    count2=0;
    box1.textContent=count;
    box2.textContent=count2;
}
