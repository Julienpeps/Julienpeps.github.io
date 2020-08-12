// Created by Julienpeps
// https://github.com/Julienpeps/Julienpeps.github.io

let choices = [];

function sliderValue() {
  const slider = document.getElementById("slider").value;
  const firstButton = document.getElementById("firstButton");

  firstButton.innerHTML = slider;
}

//Create text inputs based on slider value
function firstValidation() {
  let inputNumber = document.getElementById("slider").value;
  const container = document.getElementById("container");
  const firstButton = document.getElementById("firstButton");
  const secondButton = document.getElementById("secondButton");

  for (let i = 0; i < inputNumber; i++) {
    const createInput = document.createElement("input");
    const createBreaker = document.createElement("br");

    createInput.type = "text";
    createInput.id = i;

    container.appendChild(createInput);
    container.appendChild(createBreaker);
  }

  firstButton.remove();

  secondButton.disabled = false;
}

//Get text inputs values
function secondValidation() {
  //Count amount of Inputs
  let elementsInDiv = document.getElementById("container");
  let amountOfInputs = elementsInDiv.children.length / 2;

  for (let i = 0; i < amountOfInputs; i++) {
    choices[i] = document.getElementById(i).value;
  }

  function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let output = choices[randomNumber(amountOfInputs)];
  console.log(output);

  const outputText = document.getElementById("output");
  outputText.innerHTML = output;
}
