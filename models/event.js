var mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    day: Number,
    month: Number,
    year: Number,
    time: String,
    tilDay: Number,
    tilMonth: Number,
    tilYear: Number,
    location: String,
    image: String,
    color: String
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;