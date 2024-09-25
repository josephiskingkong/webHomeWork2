const { TaskModel } = require("./db/TaskModel");
const { Task } = require("./Task");

class TaskManager {
    async create(title, description) {
        const task = new Task(title, description);
        await task.addToDB();
        return task;
    }

    async find(id) {
        const task = await TaskModel.findOne({ where: { id: id } });
        if (!task) {
            return {};
        }
        return new Task(task.title, task.description, task.id);
    }

    async destroy(id) {
        const task = await TaskModel.findOne({ where: { id: id } });
        if (!task) {
            return {};
        }

        await new Task(id = id).destroy();
    }

    async getTasksList() {
        const tasks = await TaskModel.findAll();
        if (tasks.length === 0) {
            return [];
        }

        return tasks.map(task => {
            return new Task(task.title, task.description, task.id);
        })
    }
}

module.exports = { TaskManager };