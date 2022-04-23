"use strict";

const advice1 = document.querySelector(".advice__message");
const adviceId = document.querySelector(".advice__number");
const diceClick = document.querySelector(".dice-wrapper");

const getAdvice = function () {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((data) => {
      advice1.textContent = data.slip.advice;
      adviceId.textContent = data.slip.id;
    });
};

//For initial load
getAdvice();

//On dice click
diceClick.addEventListener("click", getAdvice);
