const createError = require('http-errors');
const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const getUsers = require('./routes/users');
const postPseudo = require('./routes/postPseudo');

//body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/getusers', getUsers);
app.use('/postpseudo', postPseudo);


const db = mongoose.connection;
const mongoDB = 'mongodb://localhost:27017/blindtest'
mongoose.connect(mongoDB)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



module.exports = app;
