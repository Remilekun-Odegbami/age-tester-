// query selector to get the values of the html elements
const btn = document.querySelector(".submit");
const output = document.querySelector(".output");
let checkbox = document.querySelector("#agree");

const checkAge = (e) => {
  // this prevents the form from refreshing
  e.preventDefault();

  let dateInput = document.querySelector("#date").value;
  // the value of dateInput is converted into a date object
  dateInput = new Date(dateInput);

  // the year of the converted date is extracted
  dateInput = dateInput.getFullYear();

  // the current date is gotten so as to be able to check the users age
  const birthDate = new Date();
  const birthYear = birthDate.getFullYear();
  const age = birthYear - dateInput;

  const oldEnough = () => `You are ${age} years old, you can drink!`;
  const notOldEnough = () =>
    `Hey!!! You are ${age} years old. No alcohol for you, go and take yoghurt instead.`;

  // the html div displays these messages
  if (age < 18 && checkbox.checked === true) {
    output.innerHTML = notOldEnough();
  } else if (age >= 18 && checkbox.checked === true) {
    output.innerHTML = oldEnough();
  } else if (!dateInput && checkbox.checked === true) {
    alert("Enter a date");
    output.innerHTML = "";
  } else if (dateInput && checkbox.checked === false) {
    alert("Please check checkbox");
    output.innerHTML = "";
  } else {
    alert("Input fields cannot be empty");
  }
};

btn.addEventListener("click", checkAge);
