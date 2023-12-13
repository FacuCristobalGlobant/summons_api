var express = require("express");
var router = express.Router();
let summonsController = require('../src/controllers/summons_controller.js');

router.get("/", async function (req, res, next) {
  
  let summons = await summonsController.getSummons();
  if (summons.length == 0) {
    res.status(204);
  }
  res.send(summons);
});

router.get("/:id", async function (req, res, next) {
  
  let summons = await summonsController.getSummonById(req.params.id);
  if (!summons) {
    res.status(204);
  }
  res.send(summons);
});

router.put("/:id", async function (req, res, next) {
  
  let summons = await summonsController.updateSummon(req.params.id, req.body);
  if (!summons) {
    res.status(204);
  }
  res.send("Updated summon with id: " + summons._id);
});

router.post("/", async function (req, res, next) {
  try {
    let newSummon = await summonsController.createSummon(req.body);
    res.statusCode = 201;
    res.body = newSummon;
  } catch (error) {
    console.log(error);
  }
  res.send("postsummons");
});

router.delete("/:id", async function (req, res, next) {
  let result = await summonsController.deleteSummon(req.params.id);
  res.send(result);
});

module.exports = router;
