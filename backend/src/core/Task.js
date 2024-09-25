class Task {
    id;
    title;
    description;

    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    async addToDB() {
        
    }
}

module.exports = { Task }