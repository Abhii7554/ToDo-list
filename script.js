function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  renderTasks();
}
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((taskText, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

  // Allow pressing Enter key to add a task
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  renderTasks();
