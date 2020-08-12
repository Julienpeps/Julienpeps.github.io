let counter = 0;
let output = document.getElementById("output");

function counterAdd(){
    counter++;
    counterOutput(counter);
}

function counterDecrease(){
    counter--;
    counterOutput(counter);
}

function counterReset(){
    counter = 0;
    counterOutput(counter);
}

function counterOutput(value){
    output.innerHTML = value;
}