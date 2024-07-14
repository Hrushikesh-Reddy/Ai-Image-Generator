const express = require("express");
const router = express.Router();
const homeC = require("../controllers/homeController");

router.get("/", homeC.hRender);

module.exports =  router
