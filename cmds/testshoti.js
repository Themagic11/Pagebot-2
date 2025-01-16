const axios = require('axios');
const { sendMessage } = require('../handles/message');

module.exports = {
  name: "tshiti",
  description: "test",
  author: "mark",

  async execute(senderId, args, pageAccessToken) {
    try {
      const response = await axios.get('https://random-use-api.onrender.com/shoti');
      const { shoti: shoti, } = response.data;

  

      await sendMessage(senderId, {
        attachment: {
          type: "video",
          payload: {
            url: shoti
          }
        }
      }, pageAccessToken);
    } catch (error) {
      console.error("nag error chat mo si owner:", error);
      sendMessage(senderId, {
        text: `nag error chat mo si owner. Error: ${error.message || "Unknown error"}`
      }, pageAccessToken);
    }
  }
};
