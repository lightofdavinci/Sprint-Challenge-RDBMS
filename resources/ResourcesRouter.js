const express = require("express");
const router = express.Router();
const Resources = require("./ResourcesModel.js");

router.get("/", (req, res) => {
  Resources.getResources()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const resource = req.body;
  Resources.addResources(resource)
    .then(resourc => {
      res.status(201).json(resourc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
