const express = require("express");
const helmet = require("helmet");

const ProjectsRouter = require("./projects/ProjectsRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectsRouter);

// sanity test

server.get("/", (req, res) => {
  res.status(200).json({ message: "just another sprint!!" });
});

module.exports = server;
