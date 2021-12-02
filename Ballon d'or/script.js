const courses = [
  {
    name: " Johan Cruyff",
    age: "3",
  },
  {
    name: "Cristiano Ronaldo",
    age: "5",
  },

  {
    name: "Franz Beckenbauer",
    age: "2",
  },
  {
    name: "Lionel Messi",
    age: "7",
  },
  {
    name: "Ronaldinho",
    age: "1",
  },
  {
    name: "Ronaldo",
    age: "2",
  },
  {
    name: " Karl-Heinz Rummenigge",
    age: "2",
  },
];

function generateLIST() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const age = document.createTextNode(course.age);
    span.appendChild(age);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

// generateLIST();

window.addEventListener("load", generateLIST);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
  courses.sort((a, b) => b.age - a.age);
  generateLIST();
});

var goatBtn = document.querySelector(".goat-btn");
var msg = document.querySelector(".msg");

goatBtn.addEventListener("click", () => {
  goatBtn.innerHTML = "Messi is GOAT with 7 Ballon D'or";
});
