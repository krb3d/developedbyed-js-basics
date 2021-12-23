const storageItemName = "todos";

// Selectors
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", doElementButtonsActions);
filterOption.addEventListener("click", filterTodo);

// Restore from storage
window.addEventListener("DOMContentLoaded", () => {
  for (let todo of getTodoListFromLocalStorage()) {
    drawOneTodo(todo);
  }
});

// Functions
function addTodo(event) {
  event.preventDefault();

  todoText = todoInput.value;

  if (!todoText) {
    return;
  }

  addTodoToLocalStorage(todoText);
  drawOneTodo(todoText);

  todoInput.value = "";
}

function doElementButtonsActions(event) {
  const item = event.target;

  const isTrashButton = item.classList.contains("trash-btn");
  const isCompleteButton = item.classList.contains("complete-btn");

  if (isTrashButton) {
    const todo = item.parentElement;
    const todoText = todo.children[0].innerText;
    removeTodoFromLocalStorage(todoText);

    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });

    return;
  }

  if (isCompleteButton) {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    return;
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    if (todo.nodeName === "#text") {
      return;
    }
    let newDisplay = "flex";
    switch (event.target.value) {
      case "all":
        break;
      case "completed":
        if (!todo.classList.contains("completed")) {
          newDisplay = "none";
        }
        break;
      case "uncompleted":
        if (todo.classList.contains("completed")) {
          newDisplay = "none";
        }
        break;
    }
    todo.style.display = newDisplay;
  });
}

function drawOneTodo(todoText) {
  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create LI
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoText;

  todoDiv.appendChild(newTodo);

  // Buttons
  const completedButton = document.createElement("button");
  completedButton.setAttribute("title", "Mark completed");
  completedButton.innerHTML = '<i class="fas fa-check">&nbsp;Complete</i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.setAttribute("title", "Delete");
  trashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
}

function getTodoListFromLocalStorage() {
  let todosInStorage = JSON.parse(localStorage.getItem(storageItemName));
  if (!todosInStorage) {
    todosInStorage = [];
  }

  return todosInStorage;
}

function addTodoToLocalStorage(todoToSave) {
  if (!todoToSave) {
    return;
  }

  let todosInStorage = getTodoListFromLocalStorage();
  todosInStorage.push(todoToSave);
  localStorage.setItem(storageItemName, JSON.stringify(todosInStorage));
}

function removeTodoFromLocalStorage(todoToRemove) {
  let todosInStorage = getTodoListFromLocalStorage();
  let index = todosInStorage.indexOf(todoToRemove);
  if (index < 0) {
    return;
  }

  var deleted = todosInStorage.splice(index, 1);

  localStorage.setItem(storageItemName, JSON.stringify(todosInStorage));
}
