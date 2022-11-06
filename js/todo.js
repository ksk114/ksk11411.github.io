const todoForm = document.getElementById("todo");
const todoLists = document.getElementById("todolists");
const todoInput = document.querySelector("#todo input");
let todos = [];
const TODOS_KEY = "todos"


function todosLocal() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todos) => todos.id !== parseInt(li.id));
    todosLocal();
}
function addTodo(newTodo) {
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    list.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "❌"
    list.appendChild(button);
    button.addEventListener("click",deleteTodo);
    span.innerText = newTodo.text;
    todoLists.appendChild(list);
}
function savetodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = ""
    const todoObject = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(todoObject);
    addTodo(todoObject);
    todosLocal();
}

todoForm.addEventListener("submit", savetodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(addTodo);
}