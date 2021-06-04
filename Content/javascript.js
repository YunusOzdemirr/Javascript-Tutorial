const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelector(".card-body");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { //All eventListeners
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosUI);
    secondCardBodye.addEventListener("click", deleteTodo);
}

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

        showAlert("success", "Todo başarıyla silindi")
    }
}

function deleteTodoFromStorage(deleteTodo) {
    let todos = getdasdTodoFromStorage();
    todos.forEach(function(todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosUI() {
    let todos = getTodoFromStorage();
    todos.forEach(function(todo) {
        addTodoUI(todo);
    })
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        showAlert("danger", "lütfen bir todo giriniz");
    } else {
        addTodoUI(newTodo);
        addTodoStorage(newTodo);
        showAlert("success", "todo başarıyla eklendi");
    }
    e.preventDefault();
}

function getTodoFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoStorage(newTodo) {
    let todos = getTodoFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`
    alert.textContent = message;

    firstCardBody.appendChild(alert);
    window.setTimeout(function() { alert.remove(); }, 1000)
}

function addTodoUI(newTodo) {
    //List Item create
    const listItem = document.createElement("li");
    //Link create
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    //Text Node Add
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    //Todo List to add listItem
    todoList.appendChild(listItem);
    console.log(newTodo + "has been added")
    todoInput.value = "";
}