var birthDate = document.querySelector("#date").value;
var birthMonth = document.querySelector("#month").value;
var birthYear = document.querySelector("#year").value;
var age = document.querySelector("#age");
var btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  var date = new Date();
  var currentDate = date.getDate();
  var currentMonth = 1 + date.getMonth();
  var currentYear = date.getFullYear();
  console.log(currentYear);
  var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birthDate > currentDate) {
    currentDate = currentDate - months[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }
  if (birthMonth > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  let days = currentDate - birthDate;
  let month = currentMonth - birthMonth;
  let year = currentYear - birthYear;
  console.log(year);

  age.innerHTML =
    "Your age is " + year + " Years " + month + " Months " + days + " Days";
});

// const calculateAge = () => {
//   var date = new Date();
//   var currentDate = date.getDate();
//   var currentMonth = 1 + date.getMonth();
//   var currentYear = date.getFullYear();
//   var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (birthDate > currentDate) {
//     currentDate = currentDate - months[currentMonth - 1];
//     currentMonth = currentMonth - 1;
//   }
//   if (birthMonth > currentMonth) {
//     currentMonth = currentMonth + 12;
//     currentYear = currentYear - 1;
//   }

//   var days = currentDate - birthDate;
//   var month = currentMonth - birthMonth;
//   var year = currentYear - birthYear;

//   console.log(year);
//   age.innerHTML =
//     "Your age is " + year + " Year " + month + " Months " + days + " Days";
// };
