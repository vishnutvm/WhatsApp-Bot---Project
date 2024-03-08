import dotenv from 'dotenv';
import pkg from 'whatsapp-web.js';
const { Client, RemoteAuth } = pkg;
import { connectToDatabase, createMongoStore } from './db/mongodb.js';
import whatsappBotController from './controllers/whatsappBotController.js';

dotenv.config();

// Connect to MongoDB
connectToDatabase()
  .then(() => {
    const store = createMongoStore(); // Create a MongoDB store

    const client = new Client({
      authStrategy: new RemoteAuth({
        store: store,
        backupSyncIntervalMs: 300000, // Adjust backup sync interval as needed
      }),
    });

    whatsappBotController.initialize(client);
    client.initialize();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
export { Client as default };
