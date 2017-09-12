const express = require('express');
const router = express.Router();
const connection = require('./api-container').getConnection();

const sendError = require('./api-container').sendError;

let response = require('./api-container').response;

// Get users
router.get('/get', (req, res) => {
    console.log('api/users/get called')
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;