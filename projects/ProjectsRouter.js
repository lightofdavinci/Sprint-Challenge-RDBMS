const express = require("express");
const router = express.Router();
const Projects = require("./ProjectsModel");

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(project => {
      project.map(newproject => {
        if (newproject.completed === 0) {
          newproject.completed = false;
        } else {
          newproject.completed = true;
        }
        return newproject;
      });
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const project = req.body;
  Projects.addProjects(project)
    .then(proj => {
      res.status(201).json(proj);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;