//Dom-Elemente holen
const input = document.getElementById("todo-input");
const button = document.getElementById("todo-button");
const list = document.getElementById("todo-list");

//Beim Hinzufügen eines neuen To-Do-Elements
button.addEventListener("click", () => {
  //Text aus dem Input-Feld trimmen und in Variable "taskText" speichern
  const taskText = input.value.trim();

  //Überprüfen, ob der Text nicht leer ist
  if (taskText !== "") {
    //Neues Li-Element erstellen
    const newItem = document.createElement("div");
    newItem.classList.add("todo-item");

    //Neues Checkbox-Element erstellen
    const checkbox = document.createElement("input");
    checkbox.classList.add("todo-checkbox");
    checkbox.type = "checkbox";

    //Text-Element erstellen
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("todo-text");

    //Checkbox Event Listener
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        span.style.textDecoration = "line-through";
      } else {
        span.style.textDecoration = "none";
      }
    });

    // 🆕 Löschen-Button pro Element
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", () => {
      newItem.remove();
    });

    //Elemente zusammenfügen
    newItem.appendChild(span);
    newItem.appendChild(checkbox);
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

    //Input-Feld leeren
    input.value = "";
  }
});
