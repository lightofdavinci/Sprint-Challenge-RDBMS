const express = require("express");
const router = express.Router();
const Tasks = require("./TaskModel.js");

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const task = req.body;
  Tasks.addTask(task)
    .then(resourc => {
      res.status(201).json(resourc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
