const express = require('express')
const router = express.Router(); // eslint-disable-line new-cap
const Component = require('../models/component');
// const User = require("../models/user");


// GET a list of components
router.get("/", (req, res) => {
  // var currentUser = req.user;
  Component.find({})
    .then(components => {
      res.json({ 'list components': components });
    })
    .catch(err => {
      console.log(err.message);
      res.json({ 'Could not get list of components': err.message });
    });
});

// GET Single Component
router.get("/:name", function(req, res) {
  Component.find({ name: req.params.name })
  .then(component => {
    res.json({ 'date': component[0].createdAt, 'name': component[0].name, 'component': component });
  })
  .catch(err => {
    console.log(err);
  });
});

// CREATE Component
router.post("/add/component", (req, res) => {
  // if (req.user) {
  const component = new Component(req.body);
  component.save(function(err, component) {
    console.log(req.body.name)
    res.json({'Add': "success", 'component': component})
  });
});

// delete a single component
router.delete("/delete/:name", (req, res) => {
  Component.findOneAndRemove({name : req.params.name}, (err,Component) => { 
    res.json({'Add': "success", 'component': req.params.name})
  }); 
})

router.delete("/delete_all", (req, res) => {
  Component.remove({}, function(err)  {
    res.json("Successfully deleted all components")
  })
});

// update a single component
router.post("/update/component", (req, res) => {
  console.log("updating .........")
  console.log(req.body)
  Component.findOne({_id: req.body.id}).exec()
  .then(function(component){
    component.html = req.body.html || component.html;
    component.name = req.body.name || component.name;
      console.log(`${req.body.name} has been updated!`)
      res.json({'update': "success", 'component': component})
      return component.save();
  })
  .then(function(){
      // Save successful! Now redirect
      // res.json({`/${req.body.name}`});
  })
  .catch(function(err){
      // There was an error either finding the document or saving it.
      console.log(err);
  });
})

module.exports = router;



