import mongoose from 'mongoose';
import { MongoStore } from 'wwebjs-mongo';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

const createMongoStore = () => {
  return new MongoStore({ mongoose, collection: 'userSessions' });
};

export { connectToDatabase, createMongoStore };
