require("dotenv").config();
const { default: MonsterApiClient } = require("monsterapi");
const path = require("path");
const db = require("../model/database");

const client = new MonsterApiClient(process.env.API_KEY);

const genrender = async (req, res) => {
  res.render("genpage");
};

const genimg = async (req, res) => {
  const prompt = req.query.prompt;
  try {
    let val = await gene(prompt);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ img_url: val }));
    db.save(val, prompt);
  } catch (e) {
    console.error(e);
  }
};

async function gene(prompt) {
  const model = "sdxl-base";
  const input = {
    prompt: prompt,
    negprompt:
      "deformed, bad anatomy, disfigured, poorly draw face, mutation, mutated, extra limb, ugly, disgusting, poorly drawn hands, missing limb, floating limbs, disconnected limbs, malformed hands, blurry, mutated hands, fingers",
    samples: 1,
    steps: 30,
    aspect_ratio: "square",
    guidance_scale: 7.5,
    seed: 24698704,
  };

  let res = await client.generate(model, input);
  console.log(res);
  return res.output[0];

  /*   return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        "https://processed-model-result.s3.us-east-2.amazonaws.com/1a0669e1-5282-4540-9452-a6d3e81ead96_0.png"
      );
    }, 1000);
  }).then((val) => {
    return val;
  }, null); */
}

module.exports = { genrender, genimg };
