// The controller is the decision maker and the glue between the model and view. 
// The controller updates the view when the model changes. It also adds event listeners 
// to the view and updates the model when the user manipulates the view.

const express = require("express");

// we dont have an instance of app here but we want to use the same app instance 
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Define all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  // calling our model burger.selectAll which will call the orm to select * from burgers
  burger.selectAll((data) => {
    const viewData = {
      //return the view
      burgers: data
    };
    console.log(viewData);
    // calls the index.handlebar to render the data
    res.render("index", viewData);
  });
});

//calling our model burger.insertOne
router.post("/api/burgers", (req, res) => {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
    // Send back the ID of the new result
    res.json({ id: result.insertId });
  });
});

//calling our model burger.updateOne
router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, (result) => {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
