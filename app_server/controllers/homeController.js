const path = require("path");

const hRender = (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
}

module.exports = {hRender}