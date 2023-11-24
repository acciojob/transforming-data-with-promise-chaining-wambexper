// script.js

// Function to create a promise that resolves after a specified time with a given value
const createPromise = (value, time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
};

// Function to perform the data transformations using promise chaining
const performTransformations = () => {
  const inputValue = document.getElementById("ip").value;

  // Initial promise to resolve after 2 seconds with the input value
  createPromise(inputValue, 2000)
    .then(result => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return createPromise(result * 2, 1000); // Multiply by 2 and resolve after 1 second
    })
    .then(result => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return createPromise(result - 3, 1000); // Subtract 3 and resolve after 1 second
    })
    .then(result => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return createPromise(result / 2, 1000); // Divide by 2 and resolve after 1 second
    })
    .then(result => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return createPromise(result + 10, 1000); // Add 10 and resolve after 1 second
    })
    .then(finalResult => {
      document.getElementById("output").textContent = `Final Result: ${finalResult}`;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("output").textContent = "Error occurred!";
    });
};

// Add onClick event listener to the button
document.getElementById("btn").addEventListener("click", performTransformations);

