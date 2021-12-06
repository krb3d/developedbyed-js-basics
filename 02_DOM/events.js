const button = document.getElementById("submit");
const todoList = document.querySelector("#todo-list");
const items = todoList.children; // HTMLCollection
const todoCount = document.querySelector(".todo-nr b");
const small = document.getElementsByTagName("small")[0];

button.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `Item ${items.length + 1}`;

  todoList.appendChild(newItem);

  todoCount.innerText = items.length;
});

const mainTitle = document.querySelector(".main-title");
button.addEventListener("click", function () {
  mainTitle.style.color = "red";
  mainTitle.style.fontSize = "5rem";
  mainTitle.classList.toggle("spectacular"); // add / remove
});

button.addEventListener("click", function (event) {
  small.innerText = `${event.pointerType}: X${event.x}, Y${event.y}`;

  console.log(event);
});
