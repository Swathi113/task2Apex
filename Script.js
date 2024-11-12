// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === "") return; // Prevent adding empty tasks

    const listItem = document.createElement('li');
    listItem.textContent = taskInput.value;

    // Create delete button for each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => listItem.remove();

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = ''; // Clear the input field after adding the task
}