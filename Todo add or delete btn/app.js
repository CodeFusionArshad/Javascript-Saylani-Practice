var input = document.getElementById("input");
var addBtn = document.getElementById("addBtn");
var editBtn = document.getElementById("editBtn");
var ul = document.getElementById("output");

function addTodo() {
  if (!input.value.trim()) return; // Prevent empty todos

  var li = document.createElement("li");
  var counter = ul.childElementCount;

  li.innerHTML = `
    <div class="outputLi">
      ${input.value}
      <button onclick="editTodoItem(${counter})">Edit</button>
      <button onclick="deleteTodo(${counter})">Delete</button>
    </div>
  `;
  li.setAttribute("id", counter);
  ul.appendChild(li);
  input.value = "";
}

function deleteTodo(id) {
  var li = document.getElementById(id);
  li.remove();
}

function editTodoItem(id) {
  var li = document.getElementById(id);
  var todoText = li.querySelector(".outputLi").textContent.trim();

  input.value = todoText;

  addBtn.style.display = "none";
  editBtn.style.display = "inline-block";

  window.currentEditingId = id;
}

function editTodo() {
  if (typeof window.currentEditingId === "undefined") return;

  var id = window.currentEditingId;
  var li = document.getElementById(id);
  var newText = input.value.trim();

  if (!newText) {
    alert("Task cannot be empty!");
    return;
  }

  li.querySelector(".outputLi").textContent = newText;

  addBtn.style.display = "inline-block";
  editBtn.style.display = "none";
  input.value = "";

  delete window.currentEditingId;
}
