import commandsList from '../../constants/commands.js';
import { reply, sendMessage } from '../../utils/whatsappUtils.js';
const handleWelcomeCommand = (message) => {
  reply(message, 'Welcome! I am your WhatsApp bot.');
};
// Updated handleHelpCommand
const handleHelpCommand = (message) => {
  try {
    let allCommands = '';
    commandsList.map(
      (module) => (allCommands += `🚀 *${module.name}*: ${module.desc}\n`)
    );
    let replyMsg =
      '*✨ Available Commands ✨*\n\n' +
      allCommands +
      '📕 To get details of a specific command, use /help [command_name]';

    reply(message, replyMsg);
  } catch (error) {
    console.error(error);
  }
};

export { handleWelcomeCommand, handleHelpCommand };
