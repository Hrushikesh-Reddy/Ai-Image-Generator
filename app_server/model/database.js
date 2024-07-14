require("dotenv").config();
const { MongoClient } = require("mongodb");
console.log(process.env.Mongo)
const client = new MongoClient(process.env.Mongo)
async function save(link, prompt){
    try{
        const db = client.db('Site');
        const coll = db.collection('home');
        await coll.insertOne({link:link, prompt:prompt})
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

module.exports = {save};