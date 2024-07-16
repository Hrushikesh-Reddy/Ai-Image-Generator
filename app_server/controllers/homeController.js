const path = require("path");
const db = require("../model/database");
const { json } = require("express");

const hRender = async (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
}

const hdata = async (req, res)=>{
    let arr = await db.getH();
    /* console.log(arr); */
    res.end(JSON.stringify(arr))
}

module.exports = {hRender, hdata}