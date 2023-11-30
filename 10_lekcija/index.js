// Dabujam formu, lai skatīties uz submit event
const form = document.querySelector("form.todo-form");
// No input laikuma ņemam vērtību un lai to iztirīt
const inputField = form.querySelector("input[name='todo']");
// Dabujam wrapperi visiem todo elementiem
const todoWrapper = document.querySelector(".todo-wrapper");

// Atslēga, pēc kuras glabājam todos ieraksti iekšā localStorage
const LOCAL_STORAGE_KEY = "todos";

// Funkcija kas atgiez tekošos todos ierakstus no localStorage
function getTodos() {
  // Dabujam todos ieakstus no localStorage
  const todos = localStorage.getItem(LOCAL_STORAGE_KEY);

  // Validācija, gadījumā ja localStorage ir tukšs, tad atgriežam tukšu masīvu
  if (!todos) {
    return [];
  }

  // Atgiezam noparsētu todos masīvu
  return JSON.parse(todos);
}

// Funkcija, kas pievieno jaunu todo ierakstu localStorage
function addNewTodo(newTodo) {
  // Dabūt iepriekšējos todos
  const currentTodos = getTodos();
  // Pievienot jauno todo pie iepriekšējiem todos
  const newTodos = [...currentTodos, newTodo];

  // Ierakstam jaunos todos localStorage
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));

  // Tiklīdz mums ir mainīti dati, mēs tos uzreiz uzzimējam
  renderAllTodos();
}

// Funkcija, kas dzēš todo ierakstu localStorage pēc indeksa
function deleteTodo(deleteIndex) {
  // Dabujam visus todos
  const currentTodos = getTodos();
  // Filtrējam izdzēstu todo
  const newTodos = currentTodos.filter((_, index) => index !== deleteIndex);
  // Ierakstam jaunos todos localStorage
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));

  // Tiklīdz mums ir mainīti dati, mēs tos uzreiz uzzimējam
  renderAllTodos();
}

// Funkcija, kas apstrādā todo dzēšanas pogu
function handleTodoDelete(event) {
  // Dabujam dzēšanas pogu
  const deleteButton = event.target;
  // Dabujam attribute, kurā ir todo indekss
  const deleteIndex = deleteButton.getAttribute("data-index");
  // Dzēšam todo pēc indeksa
  deleteTodo(Number(deleteIndex));
}

// Funckija, kas uzzīmē tekošos datus.
// 1. Idzēš visu saturu no todoWrapper
// 2. Dabūjam visus todos
// 3. Attelot jaunus datus
function renderAllTodos() {
  // Dzēšam visu saturu no todoWrapper
  todoWrapper.innerHTML = "";

  // Dabūjam visus todos
  const allTodos = getTodos();

  // Attelot jaunus datus
  allTodos.forEach((todo, index) => {
    displayTodo(index + 1, todo);
  });
}

// Izveido jaunu todo elementa html saturu, ieliec to iekšā todo-wrapperi
function displayTodo(order, todoContent) {
  // Jauna todo elementa veidošāna
  const newTodoElement = document.createElement("div");
  newTodoElement.classList.add("todo");

  // Delete pogas veidošana
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  // Piesiet click notikumu delete pogai
  deleteButton.addEventListener("click", handleTodoDelete);
  deleteButton.innerText = "X";
  // Pievienojam delete pogai atribūtu ar todo indeksu
  deleteButton.setAttribute("data-index", order - 1);

  // HTML saturs
  newTodoElement.innerHTML = `
    <p>${order}.</p>
    <p>${todoContent}</p>
  `;
  newTodoElement.appendChild(deleteButton);

  // Liekam todo iekšā wrapperī
  todoWrapper.appendChild(newTodoElement);
}

// Piesiet submit notikumu formai
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Dabujam un parbaudam input lauka vērtību
  const newTodo = inputField.value;
  if (!newTodo) {
    return;
  }
  // Pievienojam jauno todo localStorage un pārrenderē visus todos
  addNewTodo(newTodo);

  // Izdzēšam input lauku
  inputField.value = "";
});

renderAllTodos();
