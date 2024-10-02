import { deleteTask } from "../api/api.js";
import { currentTask, currentTaskContainer, refreshTasks } from "./loadTasks.js";

const deleteMenu = document.getElementById('delete-wrapper');
export const deleteScreen = document.querySelector('.delete-screen');
const confirmButton = document.getElementById('delete-confirm')
const cancelButton = document.getElementById('delete-cancel')

export function closeDeleteScreen(event) {
    if (!deleteMenu.contains(event.target)) {
        deleteScreen.classList.remove('active-screen');
    }
}

confirmButton.addEventListener('click', async () => {
    await deleteTask(currentTask.id)
    deleteScreen.classList.remove('active-screen');
    currentTaskContainer.remove();
})

cancelButton.addEventListener('click', () => deleteScreen.classList.remove('active-screen'))

