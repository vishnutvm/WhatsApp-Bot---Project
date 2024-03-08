import { handleWelcomeCommand, handleHelpCommand } from './welcomeService.js';

const handleBotCommands = (message) => {
  console.log('handleBotCommands ~ message:', message);
  try {
    let messageBody = message.body.toLowerCase();
    if (messageBody === 'hi') {
      handleWelcomeCommand(message);
    } else if (messageBody === 'help' || messageBody === '/help') {
      handleHelpCommand(message);
    } else if (messageBody.startsWith('/search_image -')) {
      // imageSearchService.handleImageSearchCommand(message);
    }
  } catch (error) {
    console.log('file: index.js:14 ~ handleBotCommands ~ error:', error);
  }
};

export default handleBotCommands;
