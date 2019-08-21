import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import { UserSchema } from '../Models/User';
export const app: Express = express();

export class UserController {
  public static CreateUser = (res: Response) => {
    res.status(200).send('user');
  };
}
