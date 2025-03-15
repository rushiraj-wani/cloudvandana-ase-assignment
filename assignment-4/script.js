function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let taskList = document.getElementById("taskList");

  // Create a new list item
  let li = document.createElement("li");
  li.textContent = taskText;

  // Create a remove button
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");

  // Remove task when button is clicked
  removeBtn.onclick = function () {
    taskList.removeChild(li);
  };

  // Append elements
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}
