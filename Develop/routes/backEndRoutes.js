const router = require("express").Router();
const workouts = require("../models/workoutBackEnd.js");

router.post("/api/workouts", function(req, res) {
  workouts
    .create({})
    .then(dbworkout, function() {
      res.json(dbworkout);
    })
    .catch(err, function() {
      res.json(err);
    });
});

module.exports = router;
