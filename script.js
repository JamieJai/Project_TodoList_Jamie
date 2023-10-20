document.getElementById('newTodo').addEventListener('click', function() {
    const todoText = prompt('새로운 TODO를 추가하세요:');
    if (todoText && todoText.trim()) {
        const li = createTodoItem(todoText.trim());
        document.getElementById('todoList').appendChild(li);
    }
    saveTodo();
});

function saveTodo() {
    const todos = [];
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => todos.push(item.querySelector('span').innerText));
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.forEach(todo => {
        const li = createTodoItem(todo);
        document.getElementById('todoList').appendChild(li);
    });
}

function deleteTodo(e) {
    const li = e.target.closest('li');
    li.parentNode.removeChild(li);
    saveTodo();
}


function editTodo(e) {
    const li = e.target.closest('li');
    const prevText = li.querySelector('span').innerText;
    const newText = prompt("TODO 내용을 수정하세요:", prevText);
    if (newText && newText.trim()) {
        li.querySelector('span').innerText = newText.trim();
        saveTodo();
    }
}

function createTodoItem(text) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);

    const span = document.createElement('span');
    span.innerText = text;
    li.appendChild(span);

    const buttonContainer = document.createElement('div');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    const editIcon = document.createElement('img');
    editIcon.src = 'icons/edit.png';
    editIcon.alt = 'Edit';
    editButton.appendChild(editIcon);
    editButton.addEventListener('click', editTodo);
    buttonContainer.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'icons/delete.png';
    deleteIcon.alt = 'Delete';
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener('click', deleteTodo);
    buttonContainer.appendChild(deleteButton);

    li.appendChild(buttonContainer);

    return li;
}

loadTodos();
