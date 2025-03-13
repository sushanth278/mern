const express = require('express');
const Log = require('../models/Log');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true })); // Handle form data

router.post('/logs', async (req, res) => {
    try {
        const { title, description, location, date, image } = req.body;
        const newLog = new Log({ title, description, location, date, image });
        await newLog.save();
        res.send('Log added successfully');
    } catch (error) {
        res.status(500).send('Error saving log');
    }
});
router.get('/logs', async (req, res) => {
    try {
        const logs = await Log.find();
        let responseText = logs.map(log => 
            `Title: ${log.title}\nDescription: ${log.description}\nLocation: ${log.location}\nDate: ${log.date}\n\n`
        ).join('');
        res.send(responseText || 'No logs found');
    } catch (error) {
        res.status(500).send('Error fetching logs');
    }
});

module.exports = router;
