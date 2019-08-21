import express, { Express, Request, Response } from 'express';
export const app: Express = express();

app.route('/user').get((req: Request, res: Response) => {
  res.status(200).send('User');
});
