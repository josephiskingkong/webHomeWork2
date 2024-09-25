const { Task } = require("./Task");

class TaskManager {
    async create(title, description) {
        const task = new Task(title, description);
        await task.addToDB();

        return this.getTasksList();
    }

    find() {

    }

    destroy() {

    }

    getTasksList() {

    }
}