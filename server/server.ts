import express, { Express } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import { app as user } from './Controllers/UserController';
import { app as checkHealth } from './Controllers/CheckHealthController';

dotenv.config({ path: '../config.env' });

const app: Express = express();

// Logging
app.use(morgan('dev'));

const controllers = [user, checkHealth];

controllers.forEach(
  (controller: Express): void => {
    app.use(controller);
  }
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
