const { TaskModel } = require("./db/TaskModel");
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

    async getTasksList() {
        const tasks = await TaskModel.findAll();
        if (tasks.length === 0) {
            return [];
        }

        return tasks;
    }
}

module.exports = { TaskManager };