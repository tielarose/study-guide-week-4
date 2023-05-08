"use strict";

/** ********************
 Make an Event Handler
********************* */

document.querySelector("#popup-alert-button").addEventListener("click", () => {
  alert("popup button was clicked");
});

/** ***********************
Practice Your Times Tables
************************ */

const handleMultiplyBtn = (evt) => {
  evt.preventDefault();

  const multsOf = parseInt(document.querySelector("#mults-of").value);
  const max = parseInt(document.querySelector("#max").value);

  const resultArr = [multsOf];

  for (let i = 2; i * multsOf <= max; i++) {
    resultArr.push(i * multsOf);
  }

  console.log(resultArr);
};

document
  .querySelector("#multiply-btn")
  .addEventListener("click", handleMultiplyBtn);

/** **************
An Agreeable Form
*************** */

const handleAgreeableForm = (evt) => {
  evt.preventDefault();

  const faveFood = document
    .querySelector("#favorite-food-input")
    .value.toLowerCase();
  const msg = `I like ${faveFood}, too`;

  document
    .querySelector("#agreeable-text")
    .insertAdjacentHTML("beforeend", `<p>${msg}</p>`);
};

document
  .querySelector("#agreeable-form [type=submit]")
  .addEventListener("click", handleAgreeableForm);

/** ****************
Five colored primes
***************** */

const PRIME_COLORS = [
  "orange",
  "midnightblue",
  "darkgoldenrod",
  "green",
  "purple"
];

const handlePrimeCirclesButton = (evt) => {
  evt.preventDefault();
  const prime_nums = [2, 3, 5, 7, 11];

  for (let i = 0; i < 5; i++) {
    document
      .querySelector("#prime-circle-area")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="prime-circle" style="background-color:${
          PRIME_COLORS[i]
        };">${prime_nums[i]}</div>`
      );
  }
};

document
  .querySelector("#make-prime-circles")
  .addEventListener("click", handlePrimeCirclesButton);

/** *********
Got Puppies?
********** */

// NOTE: DO NOT CHANGE THE CODE OF THIS FUNCTION
function showPuppies(results) {
  // get the URL for the puppy photo out of the results object
  const puppyURL = results.url;
  const puppyDiv = document.querySelector("#puppies-go-here");
  // clear anything currently in the div
  puppyDiv.innerHTML = null;
  // add the img element
  puppyDiv.insertAdjacentHTML(
    "beforeend",
    `<img src=${puppyURL} alt="puppy-image">`
  );
}

function getPuppies(evt) {
  evt.preventDefault();

  const numPuppies = document.querySelector("#num-puppies").value;

  fetch(`/puppies.json?num-puppies=${numPuppies}`)
    .then((response) => response.json())
    .then((results) => showPuppies(results));
}

document.querySelector("#puppy-form").addEventListener("submit", getPuppies);
