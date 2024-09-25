const { TaskModel } = require("./db/TaskModel");

class Task {
    id;
    title;
    description;

    constructor(title = null, description = null, id = null) {
        this.title = title;
        this.description = description;
        this.id = id;
    }

    async addToDB() {
        const instance = await TaskModel.create({ title: this.title, description: this.description });
        this.id = instance.id;
    }
}

module.exports = { Task }