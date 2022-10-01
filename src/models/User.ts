import mongoose from 'mongoose';
import { User } from '../interfaces/User';

const UserSchema = new mongoose.Schema<User>(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ['admin', 'driver'],
    },
  },
  { timestamps: true },
);

export const UserModel = mongoose.model<User>('User', UserSchema);
