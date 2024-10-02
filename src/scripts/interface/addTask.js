import { addTaskToDB } from "../api/api.js";
import { addTaskToDOM, refreshTasks } from "./loadTasks.js";

const addTaskButton = document.getElementById('menu-button');

addTaskButton.addEventListener('click', async () => {
    const [titleInput, descriptionInput] = [document.getElementById("title-input"), document.getElementById("description-input")]
    const [title, description] = [titleInput?.value, descriptionInput?.value]

    if (!title || !description) {
        return alert("Please, provide title and description")
    }

    [titleInput.value, descriptionInput.value] = ['', '']

    const task = await addTaskToDB(title, description);

    addTaskToDOM(task);
})