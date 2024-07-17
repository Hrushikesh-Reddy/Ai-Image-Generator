require("dotenv").config();
const express = require("express");
const morgan = require("morgan")
const path = require('path')

const app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

const genrouter = require('./app_server/routes/genRouter')
const homeRouter = require("./app_server/routes/homeRouter")

app.use(morgan("dev"))
app.use(express.json());
app.use(express.static(__dirname));

app.use('/', homeRouter)
app.use('/genpage', genrouter)

module.exports = app;