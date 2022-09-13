const TODOS_KEY = "todos";
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedUserName){
  toDoForm.classList.remove("hidden")
  if(savedToDos){
    toDoForm.classList.remove("hidden")
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((e)=>paintToDo(e));
  }
}


function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((e)=> e.id !== parseInt(li.id) );
  saveToDos();
}

function paintToDo(todo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText=todo.text;
  li.id = todo.id;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener('click',deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e){
  e.preventDefault();

  const toDoText = toDoInput.value;
  const toDoObj = {
    text: toDoText,
    id: Date.now(),
  }
  toDos.push(toDoObj);
  toDoInput.value= "";

  paintToDo(toDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);
