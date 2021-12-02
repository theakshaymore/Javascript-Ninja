const courses = [
  {
    name: "MS Dhoni",
    age: "39",
  },
  {
    name: "Virat Kohli",
    age: "32",
  },
  {
    name: "Rohit Sharma",
    age: "34",
  },
  {
    name: "Sachin Tendulkar",
    age: "44",
  },
  {
    name: "Shubman Gill",
    age: "22",
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
  courses.sort((a, b) => a.age - b.age);
  generateLIST();
});
