import cors from 'cors';
import dotenv from 'dotenv';
import qrcode from 'qrcode-terminal';
import pkg from 'whatsapp-web.js';
const { Client, RemoteAuth } = pkg;
import express from 'express';
import mongoose from 'mongoose';
import { MongoStore } from 'wwebjs-mongo';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    const store = new MongoStore({ mongoose, collection: 'userSessions' });

    const client = new Client({
        authStrategy: new RemoteAuth({
            store: store,
            backupSyncIntervalMs: 300000
        })
    });

    // Handle QR code event
    client.on('qr', (qr) => {
        qrcode.generate(qr, { small: true });
        console.log('QR RECEIVED', qr);
    });

    // Handle ready event
    client.on('ready', async () => {
        console.log('Client is ready!');
        client.getChats().then((chats) => {
            console.log("Chats list", chats[0])
        })

        startServer();
    });

    client.initialize();
});


// Function to start the Express server
const startServer = () => {
    app.get('/', (req, res) => res.send('WhatsApp Bot Server is running!'));
    app.listen(port, () => console.log(`WhatsApp Bot server is running on port ${port}`));
};
