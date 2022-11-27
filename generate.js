require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");
console
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateAi = async (title) => {
  const response = await openai.createImage({
    prompt: title,
    n: 1,
    size: "1024x1024",
  });
  image_url = response.data.data[0].url;
  return image_url;
};

module.exports = {generateAi}