//Output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

//input elements
const input_day = document.getElementById("day");
const input_month = document.getElementById("month");
const input_year = document.getElementById("year");

let isValid = false;
// Error Elements

const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");
submit_btn.addEventListener("click", calculateDate);
input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    error_day.textContent = "Must be a Valid date";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
    isValid = true;
  }
  if (+input_day.value < 1) {
    error_day.textContent = "This Field is Required";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_day.textContent = "";
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    error_month.textContent = "Must be a Valid month";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
    isValid = true;
  }
  if (+input_month.value < 1) {
    error_month.textContent = "This Field is Required";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_month.textContent = "";
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2023) {
    error_year.textContent = "Must be in past";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
    isValid = true;
  }
  if (+input_year.value < 1) {
    error_year.textContent = "This Field is Required";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_year.textContent = "";
  }
});

function calculateDate() {
  if (isValid) {
    let birthday =
      `${input_month.value}` / `${input_day.value}` / `${input_year.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageDiff = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiff);
    let ageYears = ageDate.getFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay();
    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYears;
  } else {
    alert("error 404!");
  }
}
