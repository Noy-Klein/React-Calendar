var mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    day: Number,
    month: Number,
    year: Number,
    time: String,
    location: String,
    image: String
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;