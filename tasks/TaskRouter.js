const express = require("express");
const router = express.Router();
const Tasks = require("./TaskModel.js");

router.get("/", (req, res) => {
  Tasks.getTask()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const task = req.body;
  Tasks.addTask(task)
    .then(tasks => {
      res.status(201).json(tasks);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
