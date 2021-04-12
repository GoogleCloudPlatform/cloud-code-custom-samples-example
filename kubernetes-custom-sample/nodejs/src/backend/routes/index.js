const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./db')

const router = express.Router();
router.use(bodyParser.json());

// Handles GET requests to /db
router.get('/db', (req, res) => {
    console.log(`received request: ${req.method} ${req.url}`)

    // Query for database entries
    try {
        Database.model.find((err, results) => {
            let collection = []
            if (results.length > 0) {
                results.forEach((result) => {
                    collection.push(result)
                });
            }
            res.status(200).json(collection)
        });
    } catch (error) {
        res.status(500).json(error)
    }
});

// Handles POST requests to /db
router.post('/db', (req, res) => {
    try {
        Database.create(({body: req.body.body}))
        res.status(200).send()
    } catch (err) {
        if (err.body == "ValidationError") {
            console.error(`validation error: ${err}`)
            res.status(400).json(err)
        } else {
            console.error(`could not save: ${err}`)
            res.status(500).json(err)
        }
    }
});

module.exports = router;
