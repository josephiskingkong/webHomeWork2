const express = require('express');

const { TaskManager } = require('./src/core/TaskManager');
const taskManager = new TaskManager()

const app = express()
const port = 5001;

const cors = require('cors');
app.use(cors());

app.get('/getTasks', async (req, res) => {
    res.send(await taskManager.getTasksList()) 
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})