"use strict";

const clearStorageBtn = document.querySelector(".clearBtn");
const timeContainer = document.querySelector(".time-container");
let id;

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

//Looping over array, and creating an html element for each
const renderList = function () {
  timeArr.forEach((el, index) =>
    timeContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="container">
    <div class="row">
    <h2 class="hour">${el}</h2>
    <textarea class="description description-${index}"> </textarea>
    <button class="saveBtn" id="${index}"> Save </button>
    </div>
    </div>`
    )
  );
};

renderList();
//turning the textArea nodelist into an array
const textArea = document.querySelectorAll(".description");
let textAreaArr = Array.from(textArea, (el) => el.value);

//assigning a click event to all buttons
const btnSave = function (e) {
  //guard clause
  if (!e.target.classList.contains("saveBtn")) {
    return;
  } else {
    id = e.target.getAttribute("id");
    let currentText = textArea[id].value;
    // Store
    localStorage.setItem(`timeData${id}`, currentText);
    console.log(currentText);
    textAreaArr[id] = "";
    textArea[id].value = "";
  }
};

//get local storage
const getStorage = function () {
  //checks if local storage is available
  if (typeof Storage !== "undefined") {
    // need to implement dynamic selection but this works currently
    textArea[0].value = localStorage.getItem("timeData0");
    textArea[1].value = localStorage.getItem("timeData1");
    textArea[2].value = localStorage.getItem("timeData2");
  } else {
    window.alert("You do not have access to local storage on this browser");
  }
};
getStorage();

//clear local storage function
const clearStorage = function () {
  let answer = window.prompt(
    "Are you sure you want to clear your local storage?"
  );
  answer = answer.toLocaleLowerCase();
  if (answer === "yes") localStorage.clear();
};

clearStorageBtn.addEventListener("click", clearStorage);
timeContainer.addEventListener("click", btnSave);
