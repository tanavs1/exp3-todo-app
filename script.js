// getting elements from the page
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");
var message = document.getElementById("message");
var count = document.getElementById("count");

// function to add a new task
function addTask() {
  var text = taskInput.value.trim();

  // do not add empty tasks
  if (text === "") {
    message.textContent = "Please enter a task";
    return;
  }
  message.textContent = "";

  // create the list item
  var li = document.createElement("li");

  var span = document.createElement("span");
  span.textContent = text;

  // click on the task text to mark it completed
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
    updateCount();
  });

  // delete button
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
    updateCount();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
  updateCount();
}

// function to show how many tasks are left
function updateCount() {
  var total = taskList.children.length;
  var done = taskList.getElementsByClassName("completed").length;

  if (total === 0) {
    count.textContent = "No tasks yet";
  } else {
    count.textContent = done + " of " + total + " tasks completed";
  }
}

// add task when button is clicked
addBtn.addEventListener("click", addTask);

// add task when Enter key is pressed
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
