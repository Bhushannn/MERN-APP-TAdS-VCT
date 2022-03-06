const express = require('express');
const router = express.Router();
const Riddle = require('../models/riddleSchema');

// ROUTE 1: Get Riddles using: GET 
router.get('/getriddle', async (req, res) => {
    try {

        Riddle.find()
            .then(result => {
                res.json( result );
                // console.log(result);
            })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error");
    }
})

// ROUTE 2: Get Riddles using: GET 
router.get('/getriddle2', async (req, res) => {
    try {
        const rid = req.header('riddleIndex');
        // console.log(rid);
        Riddle.find({ riddleIndex: rid })
            .then(Result => {
                res.json({Result});
                // console.log(Result);
            })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error");
    }
})


module.exports = router;