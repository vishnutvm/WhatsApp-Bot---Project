import app from './app.js';
import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 3000;

const expressApp = express();

expressApp.use(cors());
expressApp.use(express.urlencoded({ extended: true }));

expressApp.get('/', (req, res) => res.send('WhatsApp Bot Server is up!'));

expressApp.listen(port, () =>
  console.log(`WhatsApp Bot server is running on port ${port}`)
);
