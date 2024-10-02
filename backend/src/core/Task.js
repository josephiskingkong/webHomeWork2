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

    async update(title, description) {
        const instance = await TaskModel.findOne({ where: { id: this.id } });
        if (!instance) {
            throw new Error(`Can't find task`);
        }
        instance.title = title;
        instance.description = description;
        
        await instance.save();
        
        this.title = title;
        this.description = description;
    }
}

module.exports = { Task }