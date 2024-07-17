require("dotenv").config();
const { MongoClient } = require("mongodb");

async function save(link, prompt) {
  const client = new MongoClient(process.env.MONGO);
  try {
    const db = client.db("Site");
    const coll = db.collection("home");
    await coll.insertOne({ link: link, prompt: prompt });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function getH() {
  const client = new MongoClient(process.env.MONGO);
  try {
    const db = client.db("Site");
    const coll = db.collection("home");
    let cur = coll.find().limit(30);
    const res = new Array();
    while (await cur.hasNext()) {
      res.push(await cur.next());
    }
    return res;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = { save, getH };
