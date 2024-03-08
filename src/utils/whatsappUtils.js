const sendMessage = (client, to, message) => {
  client.sendMessage(to, message);
};
const reply = (message, text) => {
  message.reply(text);
};

export { sendMessage, reply };
