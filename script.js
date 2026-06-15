function addTask(){

    let taskText =
    document.getElementById("taskInput").value;

    let taskDate =
    document.getElementById("taskDate").value;

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>
            <strong>${taskText}</strong><br>
            ${taskDate ? "Due: " + taskDate : ""}
        </span>

        <div class="task-actions">
            <button onclick="completeTask(this)">
                Complete
            </button>

            <button onclick="editTask(this)">
                Edit
            </button>

            <button onclick="deleteTask(this)">
                Delete
            </button>
        </div>
    `;

    document.getElementById("taskList")
            .appendChild(li);

    document.getElementById("taskInput").value="";
    document.getElementById("taskDate").value="";
}

function completeTask(btn){
    btn.parentElement.parentElement
       .querySelector("span")
       .classList.toggle("completed");
}

function editTask(btn){

    let task =
    btn.parentElement.parentElement
       .querySelector("strong");

    let newTask =
    prompt("Edit Task", task.innerText);

    if(newTask){
        task.innerText = newTask;
    }
}

function deleteTask(btn){
    btn.parentElement.parentElement.remove();
}