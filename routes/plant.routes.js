const express = require("express");
const router = express.Router();

const Plants = require("../models/Plant");
const Variete = require("../models/Variete")
const { route } = require("./auth");

//show the list of all the plants
router.get("/", (req, res, next) => {
  Plants.find().populate("variete associtationPos associtationNeg")
    .then((plantDocs) => {
      res.status(200).json(plantDocs);
    })
    .catch((err) => {
      console.log(err);
    });
});

//show a single plant
router.get("/:id", (req, res, next) => {

  Plants.findById(req.params.id).populate("variete")
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch((err) => {
      console.log(err);
    });
});

// update a single plant
router.patch("/update/:id", (req, res, next) => {
  console.log("HBEUOIJHBFC", req.body)
  Plants.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((plant) => {
      console.log("IOHEOF", plant)
      res.status(200).json(plant);
    })
    .catch((err) => {
      console.log(err);
    });
});

//create a new plant
router.post("/create", (req, res, next) => {
  Plants.create(req.body)
    .then((plant) => {
      res.status(201).json(plant);
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete a plant
router.delete("/delete/:id", (req, res, next) => {
  Plants.findByIdAndDelete(req.params.id)
  .then((deletedItem) => {
      console.log("this is the delete router")
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
