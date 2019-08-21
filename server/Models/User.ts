import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema({
  distance: {
    type: Number,
    required: 'Must input a distance'
  },
  time: {
    type: String,
    required: 'Must input a time'
  },
  location: {
    type: String
  }
});
