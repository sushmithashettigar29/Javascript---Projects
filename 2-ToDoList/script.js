let inputEl = document.getElementById("input-el");
let saveBtn = document.getElementById("save-btn");
let ulEl = document.getElementById("ul-el");

saveBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.classList.add("box");

  li.innerHTML = `
    <div class="task-text">${inputEl.value}</div>
    <div class="status-btns">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
      <button class="completed-btn">Completed</button>
    </div>
  `;

  ulEl.appendChild(li);
  inputEl.value = "";

  li.querySelector(".edit-btn").addEventListener("click", function () {
    let taskText = li.querySelector(".task-text");
    let newText = prompt("Edit your task:", taskText.textContent);
    if (newText !== null && newText.trim() !== "") {
      taskText.textContent = newText.trim();
    }
  });

  li.querySelector(".delete-btn").addEventListener("click", function () {
    ulEl.removeChild(li);
  });

  li.querySelector(".completed-btn").addEventListener("click", function () {
    let taskText = li.querySelector(".task-text");
    taskText.classList.toggle("textDecor");
  });
});
