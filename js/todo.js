document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const downloadBtn = document.getElementById('download-btn');
    const saveTxtBtn = document.getElementById('save-txt-btn');
    const message = document.createElement('div');
    message.id = 'message';
    document.body.appendChild(message);

    function saveToLocalStorage() {
        const tasks = [];
        todoList.querySelectorAll('li').forEach(item => {
            tasks.push(item.firstChild.textContent);
        });
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }

    function loadFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
        tasks.forEach(taskText => {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            removeBtn.addEventListener('click', () => {
                todoList.removeChild(listItem);
                saveToLocalStorage();
                displayMessage('Task removed successfully!');
            });

            listItem.appendChild(removeBtn);
            todoList.appendChild(listItem);
        });
    }

    function writeToFile(tasks) {
        const fileContent = tasks.join('\n');
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'todo.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function downloadAsPDF() {
        const tasks = [];
        todoList.querySelectorAll('li').forEach(item => {
            tasks.push(item.firstChild.textContent);
        });
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text(tasks.join('\n'), 10, 10);
        doc.save('todo.pdf');
    }

    function displayMessage(text) {
        message.textContent = text;
        message.style.display = 'block';
        message.style.opacity = '1';
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                message.style.display = 'none'; 
            }, 500);
        }, 2000);
    }

    addBtn.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            const existingTasks = Array.from(todoList.querySelectorAll('li')).map(item => item.firstChild.textContent);
            if (existingTasks.includes(taskText)) {
                displayMessage('Task already exists!');
                return;
            }

            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            removeBtn.addEventListener('click', () => {
                todoList.removeChild(listItem);
                saveToLocalStorage();
                displayMessage('Task removed successfully!');
            });

            listItem.appendChild(removeBtn);
            todoList.appendChild(listItem);
            todoInput.value = '';
            saveToLocalStorage();
            displayMessage('Task added successfully!');
        }
    });

    downloadBtn.addEventListener('click', downloadAsPDF);
    saveTxtBtn.addEventListener('click', () => {
        const tasks = [];
        todoList.querySelectorAll('li').forEach(item => {
            tasks.push(item.firstChild.textContent);
        });
        writeToFile(tasks);
    });

    loadFromLocalStorage();
});
