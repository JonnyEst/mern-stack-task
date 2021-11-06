const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const task = await Task.find();
    res.json(task);
});

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({title,description});
    await task.save();
    res.json({estatus: 'Task Saved'});
});

module.exports = router;