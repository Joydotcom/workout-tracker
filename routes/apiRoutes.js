const router = require("express").Router();
const Exercise = require("../models/exercise.js");

router.get("/api/workouts", ({ body }, res) => {
  Workout.find()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", ({ body }, res) => {
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

router.post("/api/workouts", ({ body }, res) => {

  Workout.create({
    day: Date.now()
  })
  .then(data => {
    res.json(data);
      console.log("Created Workout!", data);
  }) 
  .catch(err) => {
    res.status(400).json(err);
  }
});

router.get("/api/workouts/range", ({ body }, res) => {
  Workout.find({})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;