const router = require("express").Router();
const Workout = require("../models/exercise.js");

router.get("/api/workouts", (req, res) => {
  Workout.find()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.params.id);
  Workout.findByIdAndUpdate(
    req.params.id,
    {$push: {exercises: req.body}},
    {new: true}
  ).then((data) => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });

});

router.post("/api/workouts", (req, res) => {

  Workout.create({
    day: Date.now()
  })
  .then(data => {
    res.json(data);
      console.log("Created Workout!", data);
  }) 
  .catch((err) => {
    res.status(400).json(err);
  })
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;