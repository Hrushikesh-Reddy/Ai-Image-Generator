const express = require("express");
const router = express.Router();
const homeC = require("../controllers/homeController");

router.get("/", homeC.hRender);
router.get("/data", homeC.hdata);

module.exports =  router
