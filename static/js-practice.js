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

// Your Code Here

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

// Your Code Here

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

// Your Code Here
