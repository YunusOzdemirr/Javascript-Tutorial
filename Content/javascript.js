const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelector(".card-body");
const secondCardBody = document.querySelector(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { //All eventListeners
    form.addEventListener("submit", addTodo);
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        /*
         <div class="alert alert-danger" role="alert">
                    <strong>Bu toDo zaten mevcut</strong>
                </div>
        */
        showAlert("danger", "lütfen bir todo giriniz");
    } else {
        showAlert("success", "todo başarıyla eklendi");
        addTodoUI(newTodo);
    }

    e.preventDefault();
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`
    alert.textContent = message;

    firstCardBody.appendChild(alert);
    window.setTimeout(function() { alert.remove(); }, 1000)
}

function addTodoUI(newTodo) { //this string value will be add the UI
    /*
     <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>
                        */
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