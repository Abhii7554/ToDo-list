function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
  
    const span = document.createElement("span");
    span.textContent = taskText;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => li.remove();
  
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  