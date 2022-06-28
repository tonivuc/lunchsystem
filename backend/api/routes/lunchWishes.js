const express = require('express')
const db = require('../database');
const router = express.Router();

router.get("/", async (req, res) => {
    const results = await db.promise().query(`SELECT * FROM lunch_wishes`);
    console.log(results[0])
    res.status(200).send(results[0]);
})

router.post('/', (req, res) => {
    console.log("Correct route")
    console.log(req.body);
    const { name, lunchWish } = req.body;

    if (name && lunchWish) {
        try {
            db.promise().query(`INSERT INTO lunch_wishes VALUES(NULL,'${name}','${lunchWish}')`);
            res.status(201).send({msg: 'Created User'});
        }
        catch (err) {
            console.log(err);
        }
        
    }
    else {
        res.status(500).send("The request for storing lunch wishes is missing a require element.");
    }
})


module.exports = router
