const path = require("path");
const db = require("../../app_server/model/database");

const hRender = async (req, res) => {
    res.render('index');
}

const hdata = async (req, res) => {
    let arr = await db.getH();
    res.end(JSON.stringify(arr))
}

const about = (req, res) => {
    res.render('about')
}

module.exports = { hRender, hdata, about }