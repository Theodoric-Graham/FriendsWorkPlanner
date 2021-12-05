"use strict";

const timeContainer = document.querySelector(".time-container");

const timeArr = [
  "12:00am",
  "1:00am",
  "2:00am",
  "3:00am",
  "4:00am",
  "5:00am",
  "6:00am",
  "7:00am",
  "8:00am",
  "9:00am",
  "10:00am",
  "11:00am",
  "12:00pm",
  "1:00pm",
  "2:00pm",
  "3:00pm",
  "4:00pm",
  "5:00pm",
  "6:00pm",
  "7:00pm",
  "8:00pm",
  "9:00pm",
  "10:00pm",
  "11:00pm",
  "12:00pm",
];

timeArr.forEach((el) =>
  timeContainer.insertAdjacentHTML(
    "beforeend",
    `
      <div class="container">
      ${el}
      <div class="row">
      <h2 class="hour">${el}</h2>
      <textarea id="1" data-hour="1" class="description1"> </textarea>
      <button class="saveBtn time-block"></button>
      </div>
      </div>`
  )
);
