const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.getProjects();
        projects.forEach(project => {
            project.completed == 1
                ? project.completed = 'true'
                : project.completed = 'false'  
        })
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post('/', async (req, res) => {
    const newProject = req.body;
    try {
        const project = await Projects.addProject(newProject);
        if (newProject.name) {
            res.status(201).json(project);
        } else {
            res.status(400).json({ error: "please provide name" });
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;