const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');


document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click',manageTodo);


function addTodo(e) {
    e.preventDefault(); // 폼에서 버튼을 클릭했을 때 새로고침 되는 기본동작을 방지함.

    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-content');
    newDiv.appendChild(newTodo)


    const completeButton = document.createElement('button');
    completeButton.innerText = 'complete';
    completeButton.classList.add('complete-button');
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.classList.add('delete-button');
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);
    saveToLocal(todoInput.value);
    todoInput.value = "";
}


function saveToLocal(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
}


function getLocal() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-content');
        newDiv.appendChild(newTodo);

        const completeButton = document.createElement('button')
        completeButton.innerText = 'complete'
        completeButton.classList.add('complete-button');
        newDiv.appendChild(completeButton);

        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'delete'
        deleteButton.classList.add('delete-button');
        newDiv.appendChild(deleteButton);

        todoList.appendChild(newDiv);

        todoInput.value="";
    });

    
    function manageTodo(e) {
        const whichButton = e.target.classList[0];
        if(whichButton === 'complete-button') {
            const todo = e.target.parentElement;
            todo.children[0].classList.toggle('completed');
        
        } else if(whichButton === 'delete-button') {
            const todo = e.target.parentElement;
            removeLocal(todo);
            todo.remove()
        }
    }


    function removeLocal(todo) {
        let todos;
        if (localStorage.getItem('todos') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }

        const index = todos.indexOf(todo.children[0].innerText);
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}

