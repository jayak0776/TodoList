let addTask = document.getElementById("add-task");
let taskContainer = document.getElementById("task-container");
let inputTask = document.getElementById("input-task");

addTask.addEventListener("click", function () {
  // Check the number of existing tasks
  let existingTasks = document.querySelectorAll(".task");

  if (existingTasks.length >= 4) {
    alert(
      "You can only have a maximum of 4 tasks. Complete some tasks to add new ones."
    );
    return; // Stop execution if the limit is reached
  }

  // Check the maximum character limit
  if (inputTask.value.trim().length > 15) {
    alert("Maximum allowed characters for a task is 15.");
    return; // Stop execution if the limit is exceeded
  }

  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.append(li);

  let checkbtn = document.createElement("button");
  checkbtn.innerHTML = '<i class="fa-solid fa-check">&#x2713;</i>';
  checkbtn.classList.add("checktask");
  task.append(checkbtn);

  let deletebtn = document.createElement("button");
  deletebtn.innerHTML = '<i class="fa-solid fa-trash can">&#x1F5D1;</i>';
  deletebtn.classList.add("deletetask");
  task.append(deletebtn);

  if (inputTask.value.trim() === "") {
    alert("Please Enter A Task...");
  } else {
    taskContainer.appendChild(task);
  }
  inputTask.value = "";

  checkbtn.addEventListener("click", function () {
    let taskText = task.querySelector("li");
    taskText.style.textDecoration = "line-through";
  });

  deletebtn.addEventListener("click", function () {
    taskContainer.removeChild(task);
  });
});
