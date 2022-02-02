const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const toDoInput = document.querySelector('#todo-form input');
const TODOLIST_KEY = 'toDos';

let toDos = [];

function saveToDoList() {
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
}

function deleteToDoList(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(item => item.id !== JSON.parse(li.id));

    li.remove();
    saveToDoList();
}

function paintToDo(newToDoObj) {
    const li = document.createElement('li');
    li.id = newToDoObj.id;
    const span = document.createElement('span');
    span.innerText = newToDoObj.text;
    const btn = document.createElement('button');
    btn.innerText = '📜';
    btn.addEventListener('click', deleteToDoList);

    li.appendChild(btn);
    li.appendChild(span);
    toDoList.appendChild(li);    
}

function toDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDoList();
}

toDoForm.addEventListener('submit', toDoSubmit);

const saveToDo = localStorage.getItem(TODOLIST_KEY);

if(saveToDo !== null){
    const parsedToDo = JSON.parse(saveToDo);
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo);
}