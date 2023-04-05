'use strict';

/*
console.log(document.querySelector(`.message`).textContent);
//we select an element from HTML with his class name

//console.log(document.querySelector(`#message`));
//we select an element from HTML with his ID name

document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
// console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔ No number!`;
  }
});
