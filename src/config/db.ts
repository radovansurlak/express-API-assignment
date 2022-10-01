import mongoose from 'mongoose';
import { appConfig } from '.';

export const connectDB = async () => {
  const { MONGODB_URI } = appConfig;
  await mongoose.connect(MONGODB_URI);
};
