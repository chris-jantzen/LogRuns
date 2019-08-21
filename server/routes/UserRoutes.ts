import express, { Express, Request, Response } from 'express';
import { UserController } from '../Controllers/UserController';

export const app: Express = express();

app.route('/user').get((req: Request, res: Response) => {
  UserController.CreateUser(res);
});
