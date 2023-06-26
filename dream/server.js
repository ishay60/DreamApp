import * as dotenv from "dotenv";
dotenv.config();

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI,
});

const openai = new OpenAIApi(configuration);

import express from "express";
import cors from "cors";

const app = express();
app.use(express.static("../public"));
app.use(cors());
app.use(express.json());

app.post("/dream", async (req, res) => {
  const prompt = req?.body?.prompt;
  if (!prompt) {
    return res
      .status(400)
      .send({ msg: "you have to enter a string to get data" });
  }
  try {
    console.log("here is the user prompt", { prompt });
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    const image = aiResponse.data.data[0].url;
    res.send({ image });
  } catch (e) {
    console.log("Dream post error", e);
    res.status(500).send({ error: "Something went wrong!" });
  }
});

app.listen(8080, () => console.log("make art on http://localhost:8080/dream"));
app?.get("/dream", (req, res) => {
  res?.send("Dream GET endpoint");
});
