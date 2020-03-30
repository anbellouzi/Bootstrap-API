const express = require('express');
const componentRoutes = require('./component.js');
const authRoutes = require('./auth.js');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: Change to your model.

router.use('/components', componentRoutes);

router.use('/auth', authRoutes);

router.get('/', (req, res) => {
    // res.json({"Welcome": "Active!", 
    //         "GET List of Components": "/components", 
    //         "GET specific component by name": "components/:name",
    //         "POST a component": "components/add/component",
    //         "UPDATE a component": "components/update/component",
    //         "DELETE a component": "components/delete/:name",
    //         "User sign up ": "auth/sign-up",
    //         "User login ": "auth/login",
    //         "User logout ": "auth/logout",
    //         })
    res.render("index");

})

module.exports = router;
