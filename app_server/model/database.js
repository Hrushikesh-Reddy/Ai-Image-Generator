require("dotenv").config();
const mongoose = require("mongoose");
const { home } = require("./schema");

const URL = process.env.MONGO;

async function save(link, prompt) {
  try {
    await mongoose.connect(URL);
    await home.insertMany([{ link: link, prompt: prompt }]);
  } catch (e) {
    console.error(e);
  } /*  finally {
    await client.close();
  } */
}

async function getH() {
  try {
    await mongoose.connect(URL);
    let cur = await home.find().limit(30);
    //console.log(cur+"here")
    return cur;
  } catch (e) {
    console.error(e);
  } /* finally {
    await client.close();
  } */
}

module.exports = { save, getH };
