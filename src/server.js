import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import dotenv from 'dotenv';
import contactsRoutes from './routes/contacts.js';


dotenv.config();

const setupServer = () => {
  const app = express();
  app.use(cors());
  app.use(pino());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Server is up and running');
  });

  app.use(contactsRoutes);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default setupServer;
