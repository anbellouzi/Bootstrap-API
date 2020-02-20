const express = require('express');
const componentRoutes = require('./component.js');
const authRoutes = require('./auth.js');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: Change to your model.

router.use('/components', componentRoutes);

router.use('/auth', authRoutes);

module.exports = router;
