const express = require('express');
const users = require('../models/User');

const router = express.Router();


router
    .post('/makeChanges', async (req, res) => {
        try {
            const newDri = await users.SubmitChanges(req.body.changes);
            res.send( newDri );
        }
        catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

module.exports = router;    