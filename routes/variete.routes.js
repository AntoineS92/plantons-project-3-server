const express = require("express");
const router = express.Router();

const Variete = require("../models/Variete");
const { route } = require("./auth");

//show the list of all the Variete
router.get("/", (req, res, next) => {
  Variete.find()
    .then((varieteDocs) => {
      res.status(200).json(varieteDocs);
    })
    .catch((err) => {
      console.log(err);
    });
});

//show a single variete
router.get("/:id", (req, res, next) => {
  Variete.findById(req.params.id)
    .then((variete) => {
      res.status(200).json(variete);
    })
    .catch((err) => {
      console.log(err);
    });
});

// update a single variete
router.post("/update/:id", (req, res, next) => {
  Variete.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((variete) => {
      res.status(200).json(variete);
    })
    .catch((err) => {
      console.log(err);
    });
});

//create a new variete
router.post("/create", (req, res, next) => {
  Variete.create(req.body)
    .then((variete) => {
      res.status(201).json(variete);
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete a variete
router.delete("/delete/:id", (req, res, next) => {
  Variete.findByIdAndDelete(req.params.id)
  .then((deletedItem) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;