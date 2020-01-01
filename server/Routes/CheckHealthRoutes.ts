import express, { Express, Request, Response } from 'express';
import { CheckHealthController } from '../Controllers/CheckHealthController';
export const app: Express = express();

app.route('/healthTest').get((req: Request, res: Response) => {
  CheckHealthController.HealthTest(res);
});
