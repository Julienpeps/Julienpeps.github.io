
// Create taskoutput container variable
let taskContainer = document.getElementById('taskOutput');

// Create task
function createTask(){

    // Create localStorage item based on input
    let input = document.getElementById('taskInput').value;
    let storageId = localStorage.length + 1;
    localStorage.setItem(storageId, input);
    storageId++;

    // Reload the page
    location.reload();
}

// Delete task
function deleteTask(item){
    alert('Coming soon.');
}

// Print tasks on reload
for(let i = 0; i < localStorage.length; i++){

    // Create div
    let taskDiv = document.createElement('div');
    taskDiv.id = 'div' + (i + 1);
    taskContainer.appendChild(taskDiv);
    
    // Create task output
    let taskOutput = document.createElement('p');
    taskOutput.innerHTML = localStorage.getItem(i + 1);
    taskOutput.id = 'task' + (i+1);
    taskDiv.appendChild(taskOutput);

    // Create delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '-';
    deleteButton.id = 'button' + (i + 1);
    deleteButton.setAttribute('onclick', 'deleteTask(this.id)');
    taskDiv.appendChild(deleteButton);
}