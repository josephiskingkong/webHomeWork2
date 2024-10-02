import { updateTask } from "../api/api.js";
import { currentTask, refreshTasks } from "./loadTasks.js";

export const editScreen = document.querySelector('.edit-screen');
const editMenu = document.querySelector('.edit-menu');
const editTitleInput = document.querySelector('#edit-title');
const editDescriptionInput = document.querySelector('#edit-description');
const confirmButton = document.querySelector("#edit-confirm")
const cancelButton = document.querySelector("#edit-cancel")

export function closeEditScreen(event) {
    if (!editMenu.contains(event.target)) {
        editScreen.classList.remove('active-screen');
    }
}

export function insertTaskIntoEditScreen(title, description) {
    editTitleInput.value = title;
    editDescriptionInput.value = description;
}

export async function saveTask() {
    const [title, description] = [editTitleInput.value, editDescriptionInput.value];
    if (!title || !description) {
        alert(`Title and description can't be empty`);
    }

    await updateTask(currentTask.id, title, description);
    await refreshTasks();

    editScreen.classList.remove('active-screen');
}

confirmButton.addEventListener('click', async () => await saveTask())
cancelButton.addEventListener('click', async () => editScreen.classList.remove('active-screen'))