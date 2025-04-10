//Dom-Elemente holen
const input = document.getElementById("todo-input");
const button = document.getElementById("todo-button");
const list = document.getElementById("todo-list");

//Beim Hinzufügen eines neuen To-Do-Elements
button.addEventListener("click", () => {
   
    //Text aus dem Input-Feld trimmen und in Variable "taskText" speichern
    const taskText = input.value.trim();

    //Überprüfen, ob der Text nicht leer ist
    if(taskText !== ""){
        
        //Neues Li-Element erstellen und Text hinzufügen
        const newItem = document.createElement("div");
        newItem.classList.add("todo-item");
        newItem.textContent = taskText;

        //Li-Element zur Liste hinzufügen
        list.appendChild(newItem);

        //Input-Feld leeren
        input.value = "";
    }

});
