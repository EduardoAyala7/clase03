    // Obtener referencias a los elementos
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Función para añadir una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Crear un nuevo elemento <li>
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Crear un botón para eliminar la tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.onclick = function () {
            taskList.removeChild(newTask);
        };

        // Añadir el botón de eliminar a la nueva tarea
        newTask.appendChild(deleteBtn);

        // Añadir la nueva tarea a la lista
        taskList.appendChild(newTask);

        // Limpiar el campo de texto
        taskInput.value = "";
    }
}

// Añadir evento al botón "Añadir Tarea"
addTaskBtn.addEventListener('click', addTask);

// Añadir funcionalidad para añadir tareas al presionar "Enter"
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
