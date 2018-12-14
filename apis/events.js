const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const event = require('../models/event');

router.post('/addevent', (req, res) => {
    event.create(req.body, function (err, data) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})

router.post('/editEvent', (req,res)=>{
    let id = req.body._id;
    event.findByIdAndUpdate(id, {$set: {color: req.body.color, day: req.body.day, month: req.body.month, year: req.body.year, tilDay: req.body.tilDay, tilMonth: req.body.tilMonth, tilYear: req.body.tilYear, title: req.body.title, time: req.body.time, location: req.body.location }}, {new: true}).exec((err, data)=>{
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(data)
        }
    })
})

router.get('/allevents', (req, res) => {
    event.find({}).exec((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(data)
        }
    })
})

router.get('/findEvent/:id', (req, res) => {
    let id = req.params.id;
    event.findById(id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(data)
        }
    })
})

router.get('/findByDate/:day/:month/:year', (req, res) => {
    let day = req.params.day;
    let month = req.params.month;
    let year = req.params.year;
    event.find({ year: year, month: month, day: day }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(data)
        }
    })
})

router.delete('/deleteevent/:id', (req,res)=>{
    let id = req.params.id;
    event.findByIdAndDelete(id, (err, data)=>{
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(data)
        }
    })
})

module.exports = router;