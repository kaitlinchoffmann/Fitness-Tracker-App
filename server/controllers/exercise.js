const express = require('express');
const exercises = require('../models/Exercise');

const router = express.Router();

router
    .get('/getExercise', async (req, res) => {
        try {
            const ex = await exercises.getUserExercises(req.userID);
            res.send( ex );
        }
        catch (error) {
            res.status(401).send( { message: error.message });
        }
    })

    .post('/newExercise', async (req, res) => {
        try {
            const addExercise = await exercises.AddExercise(req.body.exerciseList);            
            res.send( addExercise );
        }
        catch (error) {
            res.status(401).send( { message: error.message });
        }
    })


module.exports = router;    