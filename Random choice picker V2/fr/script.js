// Get index.html elements
const form = document.getElementById('form');
const objectInput = document.getElementById('input');
const objectOutput = document.getElementById('objects');
const randomizeContainer = document.getElementById('randomizeContainer');

// Add objectInput to local storage
function addObject(){
    if(localStorage.length < 10){
        // Create keys for local storage item
        const key = localStorage.length + 1;

        // Store item in local storage
        objectName = objectInput.value;
        localStorage.setItem(key, objectName);
    }
}

// Print objects
for(let i = 1; i <= localStorage.length; i++){
    const object = document.createElement('p');
    object.innerHTML = localStorage.getItem(i);
    objectOutput.appendChild(object);
}

// Create randomize and reset buttons if there are at least 2 objects
if(localStorage.length >= 2){
    const button = document.createElement('button');
    button.innerHTML = 'Résultat';
    button.id = 'randomizeButton';
    button.setAttribute('onclick', 'randomize()');

    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'Effacer';
    resetButton.id = 'resetButton';
    resetButton.setAttribute('onclick', 'reset()');

    randomizeContainer.appendChild(button);
    randomizeContainer.appendChild(resetButton);
}

function randomize(){
    // Generate a random number between 1 and the length of local storage
    const randomNumber = Math.floor(Math.random() * localStorage.length + 1);
    
    // Retrieve the value of the random local storage item
    const randomItem = localStorage.getItem(randomNumber);

    // Create the output
    const object = document.getElementById('output');
    object.innerHTML = randomItem;
}

// Triggered when reset button is clicked
function reset(){
    localStorage.clear();

    location.reload();
}