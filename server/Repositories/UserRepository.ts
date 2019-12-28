import { Model, Document } from 'mongoose';
import { User } from '../Schemas/User';

export class UserRepository {
  private readonly user: Model<Document, {}>;
  constructor() {
    this.user = User;
  }

  public CreateUsers = async (userInfo: any, response: Function) => {
    const newUser = new this.user(userInfo);
    await newUser.save((err: any, user: any) => {
      return response(err, {
        status: 'Success',
        _id: user._id,
        email: user.email
      });
    });
  };

  public GetAllUsers = (response: Function) => {
    this.user.find({}, (err, users) => response(err, users));
  };

  public GetUserByID = (id: String, response: Function) => {
    this.user.find({_id: id}, (err, user) => response(err, user));
  };
}
