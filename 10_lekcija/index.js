/*
Add Flow:
1) Lietotajs ievada jaunu uzdevumu
2) Lietotajs noklikšķina uz pogas "pievienot"
3) Jauns uzdevums parādās uz ekrāna iekšā todo-wrapper
4) Ievade tiek iztirīta
*/

const form = document.querySelector("form.todo-form");
const inputField = form.querySelector("input[name='todo']");
const todoWrapper = document.querySelector(".todo-wrapper");

const localStorageKey = "todos";

function getTodos() {
  const todos = localStorage.getItem(localStorageKey);
  return JSON.parse(todos);
}

// newTodo = "Kaut kāds uzdevums"
function setTodo(newTodo) {
  const currentTodos = getTodos();
  const newTodos = [...currentTodos, newTodo];

  localStorage.setItem(localStorageKey, JSON.stringify(newTodos));
}

function deleteTodo() {}

function handleTodoDelete(event) {
  const targetElement = event.target.parentElement;
  targetElement.remove();
}

function displayTodo(order, todoContent) {
  const newTodoElement = document.createElement("div");
  newTodoElement.classList.add("todo");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", handleTodoDelete);
  deleteButton.innerText = "X";

  newTodoElement.innerHTML = `
    <p>${order}.</p>
    <p>${todoContent}</p>
  `;
  newTodoElement.appendChild(deleteButton);

  todoWrapper.appendChild(newTodoElement);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTodo = inputField.value;
  if (!newTodo) {
    return;
  }

  const currentTodosLength = todoWrapper.children.length;

  displayTodo(currentTodosLength + 1, newTodo);

  inputField.value = "";
});

/*
Delete Flow:
1) Lietotajs nospied uz delete pogas
2) Ieraksts izdzēšās
3) Order tiek parkaitīts visiem elementiem
*/
const allDeleteButtons = document.querySelectorAll(".delete");

allDeleteButtons.forEach((button) => {
  button.addEventListener("click", handleTodoDelete);
});
