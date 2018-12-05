const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const event = require('../models/event');

router.get('/getdays/events/:year/:month/:day', (req, res) => {
    let year = req.params.year;
    let month = req.params.month;
    let day = req.params.day;
    event.find({ day: day, month: month, year: year }).exec((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(data)
        }
    })
})

router.get('/getdays/allevents', (req, res) => {
    event.find({}).exec((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(data)
        }
    })
})

module.exports = router;