import express, { Express, Request, Response } from 'express';
import { UserController } from '../Controllers/UserController';

export const app: Express = express();
const userController: UserController = new UserController();

app
  .route('/user/byProps')
  .get((req: Request, res: Response) =>
    userController.GetUserByProps(req, res)
  );

app
  .route('/user/:id')
  .get((req: Request, res: Response) => userController.GetUserById(req, res))
  .delete((req: Request, res: Response) => userController.DeleteUser(req, res))
  .put((req: Request, res: Response) => userController.UpdateUser(req, res));

app
  .route('/user')
  .post((req: Request, res: Response) => userController.CreateUser(req, res))
  .get((req: Request, res: Response) => userController.GetAllUsers(req, res));
