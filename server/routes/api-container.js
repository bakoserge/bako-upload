const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/usersdb', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

var getConnection = function() {
    return connection;
}

var response = {
    status: 200,
    data: [],
    message: null
};

const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};



module.exports = {
    getConnection: getConnection,
    response: response,
    sendError: sendError
}