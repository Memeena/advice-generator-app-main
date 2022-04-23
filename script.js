"use strict";

const advice1 = document.querySelector(".advice__message");
const adviceId = document.querySelector(".advice__number");
const diceClick = document.querySelector(".dice-wrapper");
const errorMsg = "Something went wrong! Please try again!";

/**Implementing async await for fetching from an API */

const getAdvice = async function () {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const data = await response.json();
    console.log(data);
    advice1.textContent = data.slip.advice;
    adviceId.textContent = data.slip.id;
  } catch (err) {
    advice1.textContent = errorMsg + err;
  }
};

//For initial load
getAdvice();

//On dice click
diceClick.addEventListener("click", getAdvice);

/***Code for implementing the same fetching the API through simple promise */
/**
 const getAdvice = function () {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((data) => {
      advice1.textContent = data.slip.advice;
      adviceId.textContent = data.slip.id;
    });
};
 */
