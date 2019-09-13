const db = require("../data/db-config.js");

module.exports = {
  addTask,
  getTask
};

function getTask() {
  return db("tasks");
}

function addTask(tasks) {
  return db("tasks").insert(tasks, "id");
}
