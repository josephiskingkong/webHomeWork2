import { fetchTasks } from "../api/api.js";
import { closeDeleteScreen, deleteScreen } from "./deleteTask.js";
import { closeEditScreen, editScreen, insertTaskIntoEditScreen } from "./editScreen.js";
import { closeInfoScreen, infoScreen, insertTaskIntoInfoScreen } from "./infoScreen.js";
import { closeShareScreen, shareScreen } from "./shareScreen.js";

export let currentTask = null;

function addTaskToDOM(task) {
    const tasksContainer = document.querySelector('.tasks');
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    taskElement.innerHTML = `
        <div class="task-wrapper">
            <div class="task-texts">
                <span class="task-title">${task.title}</span>
                <span class="task-description">${task.description}</span>
            </div>
            <button class="delete-task-button" id="delete_task">
                <img src="../src/assets/images/cross.svg" alt="Delete">
            </button>
        </div>
        <div class="task-buttons">
            ${createTaskButton('share', '../src/assets/images/share.svg', 'Share')}
            ${createTaskButton('edit', '../src/assets/images/edit.svg', 'Edit')}
            ${createTaskButton('info', '', 'i')}
        </div>
    `;

    const shareButton = taskElement.querySelector('#share');
    shareButton.addEventListener('click', (event) => {
        event.stopPropagation(); 
        shareScreen.classList.add('active-screen');
        currentTask = {
            id: task.id,
            title: task.title,
            description: task.description
        };
        document.addEventListener('click', closeShareScreen, { once: true });
    });

    const deleteButton = taskElement.querySelector('#delete_task');
    deleteButton.addEventListener('click', async (event) => {
        event.stopPropagation(); 
        deleteScreen.classList.add('active-screen');
        currentTask = {
            id: task.id,
            title: task.title,
            description: task.description
        };
        document.addEventListener('click', closeDeleteScreen, { once: true });
    })

    const editButton = taskElement.querySelector('#edit');
    editButton.addEventListener('click', (event) => {
        event.stopPropagation();
        editScreen.classList.add('active-screen');
        currentTask = {
            id: task.id,
            title: task.title,
            description: task.description
        };
        insertTaskIntoEditScreen(currentTask.title, currentTask.description)
        document.addEventListener('click', closeEditScreen, { once: true });
    });

    const infoButton = taskElement.querySelector('#info');
    infoButton.addEventListener('click', (event) => {
        event.stopPropagation();
        infoScreen.classList.add('active-screen');
        currentTask = {
            id: task.id,
            title: task.title,
            description: task.description
        };
        insertTaskIntoInfoScreen(currentTask.title, currentTask.description)
        document.addEventListener('click', closeInfoScreen, { once: true });
    });

    tasksContainer.appendChild(taskElement);
}

export async function refreshTasks() {
    const tasksContainer = document.querySelector('.tasks');
    tasksContainer.innerHTML = '';

    const tasks = await fetchTasks();
    const warningContainer = document.getElementById('warning');

    if (tasks.length === 0) warningContainer.classList.remove('hidden')
    else warningContainer.classList.add('hidden')

    tasks.forEach(task => addTaskToDOM(task));
}

function createTaskButton(id, iconSrc, content) {
    return `
        <button class="task-button" id="${id}">
            ${iconSrc ? `<img src="${iconSrc}" alt="${content}">` : `<span>${content}</span>`}
        </button>
    `;
}

refreshTasks()