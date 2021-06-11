const express = require("express");
const router = express.Router();
const uploader = require("./../config/cloudinary");

const requireAuth = require("../middlewares/requireAuth");
const Plants = require("../models/Plant");

//show the list of all the plants
router.get("/", (req, res, next) => {
  Plants.find()
    .populate("variete associtationPos associtationNeg")
    .then((plantDocs) => {
      res.status(200).json(plantDocs);
    })
    .catch((err) => {
      console.log(err);
    });
});

//show a single plant
router.get("/:id", (req, res, next) => {
  Plants.findById(req.params.id)
    .populate("variete")
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch((err) => {
      console.log(err);
    });
});

// update a single plant
router.patch("/update/:id", requireAuth, (req, res, next) => {
  Plants.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch((err) => {
      console.log(err);
    });
});

//create a new plant
router.post("/create", requireAuth, uploader.single("image"), (req, res, next) => {
  
  const newPlant = {... req.body};

  if (!req.file) newPlant.image = undefined;
  else newPlant.image = req.file.path;

  Plants.create(newPlant)
    .then((plant) => {
      res.status(201).json(plant);
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete a plant
router.delete("/delete/:id", requireAuth, (req, res, next) => {
  Plants.findByIdAndDelete(req.params.id)
    .then((deletedItem) => {
      console.log("this is the delete router");
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
