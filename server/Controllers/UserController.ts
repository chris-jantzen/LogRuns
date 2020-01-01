import express, { Express, Request, Response } from 'express';
import { User } from '../Models/UserInput';
import { UserRepository } from '../Repositories/UserRepository';
export const app: Express = express();

export class UserController {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  public CreateUser = async (req: Request, res: Response) => {
    const input: User = req.body;
    try {
      await this.userRepository.CreateUsers(
        input,
        (err: any, result: Object) => {
          // Define an output object to be used here, send that with res
          if (err) throw new Error(err);
          res.status(201).json(result);
        }
      );
    } catch (err) {
      res.status(400).send(err);
    }
    return input;
  };

  public GetAllUsers = (req: Request, res: Response) => {
    try {
      this.userRepository.GetAllUsers((err: any, userData: any) => {
        if (err) throw new Error(err);
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).send(err);
    }
  };

  public GetUserById = (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      this.userRepository.GetUserByID(id, (err: any, user: Object) => {
        if (err) throw new Error(err);
        res.status(200).json(user);
      });
    } catch (err) {
      res.status(400).send(err);
    }
  };

  public GetUserByProps = (req: Request, res: Response) => {
    const searchProps = req.body;
    try {
      this.userRepository.GetUserByProps(
        searchProps,
        (err: any, user: Object) => {
          if (err) throw new Error(err);
          res.status(200).json(user);
        }
      );
    } catch (err) {
      res.status(400).send(err);
    }
  };

  public DeleteUser = (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      this.userRepository.DeleteUserByID(id, (err: any) => {
        if (err) throw new Error(err);
        res.status(204);
      });
    } catch (err) {
      res.status(400).send(err);
    }
  };

  public UpdateUser = (req: Request, res: Response) => {
    const id = req.params.id;
    const updates = req.body;
    try {
      this.userRepository.UpdateUserByID(id, updates, (err: any, data: any) => {
        if (err) throw new Error(err);
        res.status(200).json(data);
      });
    } catch (err) {
      res.status(400).send(err);
    }
  };
}
