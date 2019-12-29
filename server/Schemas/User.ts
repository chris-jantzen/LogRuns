import { Schema, model } from 'mongoose';
import { Shoes } from '../Models/UserInput';

const HeightSchema = new Schema({
  large: {
    type: Number,
    required: true
  },
  small: {
    type: Number,
    required: true
  }
});

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String
  },
  age: {
    type: Number
  },
  height: {
    type: HeightSchema
  },
  weight: {
    type: Number
  },
  shoes: {
    type: Array<Shoes>()
  },
  measurement_system: {
    type: String,
    required: true
  }
});

export const User = model('User', UserSchema);
