import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const initMongoConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:4pJc6ODtuzeUfOEL@firstcluster.z3yuwh3.mongodb.net/contacts?retryWrites=true&w=majority&appName=FirstCluster',
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Mongo connection error:', error);
    throw error;
  }
};

export default initMongoConnection;
