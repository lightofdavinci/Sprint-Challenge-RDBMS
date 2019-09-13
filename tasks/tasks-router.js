const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.getTasks();
        tasks.forEach(task => {
            task.completed == 1
                ? task.completed = 'true'
                : task.completed = 'false'
        })
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post('/', async (req, res) => {
    const newTask = req.body;
    try {
        const task = await Tasks.addTask(newTask);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;