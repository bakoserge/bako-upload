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

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

//Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

//insert data in db
router.post('/add', (req, res) => {
    var users = [{
            name: 'Serge bako',
            age: 30
        },
        {
            name: 'Mike',
            age: 20
        },
        {
            name: 'Maman',
            age: 25
        }
    ];

    connection((db) => {
        var collection = db.collection('users');
        collection.insertMany(users, (err, results) => {
            res.send(results);
            db.close();
        });
    });

});

// Get users
router.get('/users', (req, res) => {
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

//upload
router.post('/upload', (req, res) => {
    console.log('upload request made to server');
    res.send(response);
});


module.exports = router;