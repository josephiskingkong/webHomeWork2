import { fetchTasks } from "../api/api.js";

export async function refreshTasks() {
    const tasksContainer = document.querySelector('.tasks');
    tasksContainer.innerHTML = '';

    const tasks = await fetchTasks();

    if (tasks.length === 0) {
        const warningContainer = document.getElementById('warning');
        warningContainer.classList.toggle('hidden')
    }

    tasks.forEach(task => {
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

        tasksContainer.appendChild(taskElement);
    });
}

function createTaskButton(id, iconSrc, content) {
    return `
        <button class="task-button" id="${id}">
            ${iconSrc ? `<img src="${iconSrc}" alt="${content}">` : `<span>${content}</span>`}
        </button>
    `;
}

refreshTasks()