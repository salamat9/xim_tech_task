import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import appConfig from './config/index.js';
import db from './models/connect.js';
import routes from './routes/index.js';

config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

const port = appConfig.port || 3000;

app.listen(port, () => {
  try {
    db.authenticate();
    console.log(`Server is running on port ${port}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
});
