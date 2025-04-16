//Dom-Elemente holen
const input = document.getElementById("todo-input");
const button = document.getElementById("todo-button");
const list = document.getElementById("todo-list");

function createEditButton(spanElement) {
  const editButton = document.createElement("button");
  editButton.textContent = "✏️";
  editButton.classList.add("edit-button");

  editButton.addEventListener("click", () => {
    const newText = prompt("Bearbeite deine Aufgabe:", spanElement.textContent);
    if (newText !== null && newText.trim() !== "") {
      spanElement.textContent = newText.trim();
    }
  });

  return editButton;
}

function createDeleteButton(todoItemElement) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑️";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    todoItemElement.remove();
  });

  return deleteButton;
}

function createCheckbox(spanElement) {
  const checkbox = document.createElement("input");
  checkbox.classList.add("todo-checkbox");
  checkbox.type = "checkbox";

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      spanElement.style.textDecoration = "line-through";
    } else {
      spanElement.style.textDecoration = "none";
    }
  });

  return checkbox;
}

//Beim Hinzufügen eines neuen To-Do-Elements
button.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  // Neues ToDo-Element
  const newItem = document.createElement("div");
  newItem.classList.add("todo-item");

  // Text erstellen
  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("todo-text");

  // Buttons & Checkbox einfügen
  const checkbox = createCheckbox(span);
  const editButton = createEditButton(span);
  const deleteButton = createDeleteButton(newItem);

  // Elemente zusammensetzen
  newItem.appendChild(span);
  newItem.appendChild(checkbox);
  newItem.appendChild(editButton);
  newItem.appendChild(deleteButton);
  list.appendChild(newItem);

  // Eingabe leeren
  input.value = "";
});
