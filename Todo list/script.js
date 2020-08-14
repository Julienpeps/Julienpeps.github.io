let taskId = 1;
let divContainer = document.getElementById("tasks");

function addTask(){
    let textInput = document.getElementById("input").value;
    text = textInput.charAt(0).toUpperCase() + textInput.slice(1).toLowerCase();
    printTask(text);
}

function printTask(text){
    // Create DIV
    let createDiv = document.createElement("div");
    createDiv.id = 'taskDiv' + taskId;
    divContainer.appendChild(createDiv);
    let tasksContainer = document.getElementById(createDiv.id);

    // Create TEXT
    let createTask = document.createElement("h3");
    createTask.innerHTML = '- ' + text;
    createTask.id = 'task' + taskId;
    tasksContainer.appendChild(createTask);

    // Create BUTTON
    let doneButton = document.createElement("button");
    doneButton.innerHTML = '-';
    doneButton.setAttribute('onclick', 'deleteTask(this.id)');
    doneButton.id = 'button' + taskId;
    tasksContainer.appendChild(doneButton);

    taskId++;
}

function deleteTask(id){
    let divId = 'taskDiv' + id.slice(6);
    let div = document.getElementById(divId);
    divContainer.removeChild(div);
}