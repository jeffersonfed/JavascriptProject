const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${taskText}
      <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = "";
    taskInput.focus();

    const deleteButton = listItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", deleteTask);
  }
}

function deleteTask(event) {
  const listItem = event.target.parentElement;
  taskList.removeChild(listItem);
}

taskInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
