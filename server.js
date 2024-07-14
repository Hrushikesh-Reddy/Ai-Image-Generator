const express = require("express");
const morgan = require("morgan")
const app = express();

const genrouter = require('./app_server/routes/genRouter')
const homeRouter = require("./app_server/routes/homeRouter")

app.use(morgan("dev"))
app.use(express.json());
app.use(express.static(__dirname));

app.use('/', homeRouter)
app.use('/genpage', genrouter)

app.listen(5000, () => {console.log(`Listening on port 5000...`)});
