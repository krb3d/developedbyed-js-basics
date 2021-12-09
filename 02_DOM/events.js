const button = document.getElementById("submit");
const todoList = document.querySelector("#todo-list");
const items = todoList.children; // HTMLCollection
const todoCount = document.querySelector(".todo-nr b");
const small = document.getElementsByTagName("small")[0];
const nameInput = document.querySelector(".name-input");

const mainTitle = document.querySelector(".main-title");

button.addEventListener("click", function (event) {
  event.preventDefault();

  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `Item ${items.length + 1}: ${nameInput.value}`;

  nameInput.value = "";

  todoList.appendChild(newItem);

  todoCount.innerText = items.length;

  newItem.addEventListener("click", deleteItem);
});

for (let item of items) {
  item.addEventListener("click", deleteItem);
}

function deleteItem(event) {
  event.stopPropagation(); // block event bubbling
  event.target.remove();
}

button.addEventListener("click", function () {
  mainTitle.style.color = "red";
  mainTitle.style.fontSize = "5rem";
  mainTitle.classList.toggle("spectacular"); // add / remove
});

button.addEventListener("click", function (event) {
  small.innerText = `${event.pointerType}: X${event.x}, Y${event.y}`;
  console.log(event);
});

// Events bubbling, blocked by event.stopPropagation() in deleteItem()
todoList.addEventListener("click", function () {
  todoList.classList.toggle("fade");
});
