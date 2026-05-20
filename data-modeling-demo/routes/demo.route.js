const express = require('express');
const router = express.Router();
const Task = require('../models/task.model');
const User = require('../models/user.model');

router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.post('/tasks', async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/tasks', async (req, res) => {

    const tasks = await Task.find().populate('userId');
    res.json(tasks);
}); 

router.get('/users', async (req, res) => {

    const users = await User.find();
    res.json(users);
});
module.exports = router;