const express = require('express');
const componentRoutes = require('./component.js');
const authRoutes = require('./auth.js');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: Change to your model.

router.use('/components', componentRoutes);

router.use('/auth', authRoutes);

router.get('/', (req, res) => {
    res.render("index");
})

router.get('/healthcheck', (req,res) => {
    res.sendStatus(200);
})


module.exports = router;
