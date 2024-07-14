const express = require("express");
const router = express.Router();
const genC = require("../controllers/genController");

router.get("/", genC.genrender);
router.get("/api/generate", genC.genimg);

module.exports =  router
