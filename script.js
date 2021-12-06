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
        <textarea class="description"> </textarea>
        <button class="saveBtn" id="${index}"> Save </button>
        </div>
        </div>`
    )
  );
};
renderList();

const textArea = document.querySelectorAll(".description");
const textAreaArr = Array.from(textArea, (el) => el.value);
//function to insert an element at a specific point in the array
const insertAt = function (array, index, ...elementsArray) {
  array.splice(index, 1, ...elementsArray);
};

//Making sure the array doesnt reset on refresh
let descriptionArr = localStorage.getItem("description")
  ? JSON.parse(localStorage.getItem("description"))
  : textAreaArr;
console.log(descriptionArr);

localStorage.setItem("description", JSON.stringify(descriptionArr));
const data = JSON.parse(localStorage.getItem("description"));
//get local storage
const getStorage = function () {
  //checks if local storage is available
  if (typeof Storage !== "undefined") {
    data.forEach((el, index) => (textArea[index].value = el));
  }
};
getStorage();

//assigning a click event to all buttons
const btnSave = function (e) {
  //guard clause
  if (!e.target.classList.contains("saveBtn")) {
    return;
  } else {
    id = e.target.getAttribute("id");
    let currentText = textArea[id].value;
    // Store
    //inserting elements at the specified id(index in this case), with the currentText
    insertAt(descriptionArr, id, currentText);
    localStorage.setItem("description", JSON.stringify(descriptionArr));
    //Clears the field depending on which button is clicked
    textArea[id].value = " ";
  }
};

//clear local storage function
const clearStorage = function () {
  let answer = window.prompt(
    "Are you sure you want to clear your local storage?"
  );
  answer = answer.toLocaleLowerCase();
  if (answer === "yes") {
    //set textareas to empty strings
    textArea.forEach((el) => (el.value = ""));
    localStorage.clear();
  }
};

clearStorageBtn.addEventListener("click", clearStorage);
timeContainer.addEventListener("click", btnSave);
