const express = require("express");
const router = express.Router();
const Tasks = require("./TaskModel.js");

router.get("/", (req, res) => {
  Tasks.getTask()
    .then(tasks => {
      tasks.map(newtasks => {
        if (newtasks.completed === 0) {
          newtasks.completed = false;
        } else {
          newtasks.completed = true;
        }
        return newtasks;
      });
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
