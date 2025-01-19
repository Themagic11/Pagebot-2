const axios = require('axios');
const { sendMessage } = require('../handles/message');

module.exports = {
  name: "shoti2",
  description: "Send a shoti 2 video beta test",
  author: "mark",

  async execute(senderId, args, pageAccessToken) {
    try {
      const response = await axios.get('shotiurl'); // bro yung shoti url paltan mo ng shoti url mo
      const { url, name, description } = response.data;

      await sendMessage(senderId, {
        text: ` Username: ${name}\nauthor: ${author}\n`
      }, pageAccessToken);

      await sendMessage(senderId, {
        attachment: {
          type: "video",
          payload: {
            url: url
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
