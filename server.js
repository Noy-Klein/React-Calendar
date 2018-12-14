const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const SERVER_PORT = 2222;

mongoose.connect('mongodb://localhost/ReactCalendarDB', function () {
    console.log("DB connection established!!!");
})

const eventsApi = require('./apis/events');
const monthDataApi = require('./apis/monthData');
var app = express();
app.use(express.static('public'));
app.use(express.static('build'))
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })

app.use(eventsApi)
app.use(monthDataApi)

app.get('*', (req,res)=>{
    res.sendFile( path.join(__dirname, '/build/index.html'))
})

app.listen(SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
})