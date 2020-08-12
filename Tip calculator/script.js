// Inspired by https://skillcrush.com/blog/projects-you-can-do-with-javascript/
// Created by Julienpeps
// https://github.com/Julienpeps/Julienpeps.github.io

function ratingOutputFunction() {
  ratingInput = document.getElementById("ratingInput").value;
  document.getElementById("ratingOutput").innerHTML = ratingInput;
}

function tipCalculation() {
  // Retrieve form inputs
  let billInput = document.getElementById("billInput").value;
  let ratingInput = document.getElementById("ratingInput").value;
  let ratingPercentage;
  let personsInput = document.getElementById("personsInput").value;
  let resultOutput = document.getElementById("resultOutput");
  let result;

  // Conversion of the rating into a percentage
  if (ratingInput < 5) {
    ratingPercentage = ratingInput * 5;
  } else {
    // ratingInput * 5 + 5
    ratingPercentage = 30;
  }

  // Form validation
  if (
    billInput > 0 &&
    billInput !== undefined &&
    personsInput > 0 &&
    personsInput !== undefined
  ) {
    // Calculation
    result = ((billInput * (ratingPercentage / 100)) / personsInput).toFixed(2);
    resultOutput.innerHTML = "Your ideal Tip is " + result + " € per person.";
  } else {
    // Error messages
    if (billInput <= 0 || billInput === undefined) {
      alert("Please enter a valid bill amount!");
    } else if (personsInput <= 0 || personsInput === undefined) {
      alert("Please enter a valid number of persons!");
    } else {
      alert("Error");
    }
  }
}
