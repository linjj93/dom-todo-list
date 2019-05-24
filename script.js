const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];
const toDoList = document.querySelector("#todo-list");
const submitBtn = document.querySelector("button");
const inputBox = document.querySelector("input");
const editBtn = document.querySelector("ul li span");
const itemInfo = submitBtn.previousElementSibling;

for (let task of tasks) {
  const listItem = document.createElement("li");
  listItem.textContent = task;
  toDoList.appendChild(listItem);
  listItem.addEventListener("click", function() {
    listItem.classList.toggle("done");
  });
}

function addItem(taskInput, elementToAdd) {
  if (!taskInput.value.trim() == "") {
    elementToAdd.textContent = taskInput.value;
    toDoList.appendChild(elementToAdd);
    taskInput.value = null;
    elementToAdd.addEventListener("click", function() {
      elementToAdd.classList.toggle("done");
    });
  } else {
    alert("No information found. Please enter details of to-do item.");
  }
}

submitBtn.addEventListener("click", function() {
  const listItem = document.createElement("li");
  addItem(itemInfo, listItem);
});

inputBox.addEventListener("keypress", function(event) {
  const listItem = document.createElement("li");
  if (event.keyCode == 13) {
    event.preventDefault();
    addItem(itemInfo, listItem);
  }
});
