const express = require('express');

const { TaskManager } = require('./src/core/TaskManager');
const taskManager = new TaskManager()

const app = express()
const port = 5001;

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/getTasks', async (req, res) => {
    res.send(200, await taskManager.getTasksList());
})

app.post('/create', async (req, res) => {
    const { title, description } = req.body;
    const result = await taskManager.create(title, description);
    return res.send(200, result);
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})