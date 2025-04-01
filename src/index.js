import setupServer from './server.js';
import initMongoConnection from './db/initMongoConnection.js';

const startApp = async () => {
  try {
    await initMongoConnection(); 
    setupServer(); 
  } catch (error) {
    console.error('Failed to start the app:', error.message);
    process.exit(1);
  }
};

startApp();
