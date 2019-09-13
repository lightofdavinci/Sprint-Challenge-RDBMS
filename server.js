const express = require("express");
const helmet = require("helmet");

const ProjectsRouter = require("./projects/ProjectsRouter.js");
const ResourcesRouter = require("./resources/ResourcesRouter.js");
const TasksRouter = require("./tasks/TaskRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);
server.use("/api/tasks", TasksRouter);

// sanity test

server.get("/", (req, res) => {
  res.status(200).json({ message: "just another sprint!!" });
});

module.exports = server;
