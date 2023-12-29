let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        const li = document.createElement('li');
        const editbtn = document.createElement('button');
        editbtn.innerHTML = `<button class='edit-btn' onclick="editTask(${index})">Edit</button>`;
        const deletebtn = document.createElement('button');
        deletebtn.innerHTML = `<button class='delete-btn' onclick="deleteTask(${index})">Delete</button>`;
        li.innerHTML = `<p>${task}</p>`;
        // create buttons container
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');
        btnContainer.appendChild(editbtn);
        btnContainer.appendChild(deletebtn);
        // append all items to taskContainer
        taskContainer.appendChild(li);
        taskContainer.appendChild(btnContainer);
        // append list container to the main container
        taskList.appendChild(taskContainer);
    });
}

function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const newTask = newTaskInput.value.trim();

    if (newTask !== '') {
        tasks.push(newTask);
        newTaskInput.value = '';
        renderTasks();
    }
}

function editTask(index) {
    const updatedTask = prompt('Edit task:', tasks[index]);
    
    if (updatedTask !== null) {
        tasks[index] = updatedTask.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Initial rendering of tasks
renderTasks();
