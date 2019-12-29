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
    this.user.find({ _id: id }, (err, user) => response(err, user));
  };

  public GetUserByProps = (searchProps: Object, response: Function) => {
    this.user.find(searchProps, (err, user) => response(err, user));
  };

  public DeleteUserByID = (id: String, response: Function) =>
    this.user.findByIdAndDelete(id, err => response(err));

  public UpdateUserByID = (id: String, updates: Object, response: Function) => {
    this.user.findByIdAndUpdate(
      { _id: id },
      updates,
      { new: true },
      (err, user) => response(err, user)
    );
  };
}
