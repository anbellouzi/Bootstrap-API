const express = require('express');
const User = require('../models/user');
const router = express.Router(); // eslint-disable-line new-cap
const jwt = require('jsonwebtoken');


// SIGN UP POST
router.post("/sign-up", (req, res) => {
  // Create User
  const user = new User(req.body);

  user
    .save()
    .then(user => {
        res.json({"Sign-up": "Success", "User": user})
    })
    .catch(err => {
        res.json({"Sign-up": "failed", "err": err.message})
    });
});

// LOGOUT
router.get('/logout', (req, res) => {
    res.clearCookie('nToken');
    res.json({"Logout": "success"})
});

// LOGIN
router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Find this user name
    User.findOne({ username }, "username password")
      .then(user => {
        if (!user) {
          // User not found
          return res.status(401).send({ message: "Wrong Username or Password" });
        }
        // Check the password
        user.comparePassword(password, (err, isMatch) => {
          if (!isMatch) {
            // Password does not match
            return res.status(401).send({ message: "Wrong Username or password" });
          }
          // Create a token
          const token = jwt.sign({ _id: user._id, username: user.username }, process.env.SECRET, {
            expiresIn: "60 days"
          });
  
         
          // Set a cookie and redirect to root
          res.cookie("nToken", token, { maxAge: 900000, httpOnly: true });
          res.json({"Login": 'Success', 'User': user});
        });
      })
      .catch(err => {
        res.json({"Login": "Failed", "Err" :err});
      });
  });


module.exports = router;
