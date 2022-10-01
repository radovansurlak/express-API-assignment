import mongoose from 'mongoose';
import { Tank } from '../interfaces/Tank';

const TankSchema = new mongoose.Schema<Tank>(
  {
    heightInCm: {
      type: Number,
      required: true,
    },
    volumeInLiters: {
      type: Number,
      required: true,
    },
    segments: [
      {
        startHeightInCm: Number,
        endHeightInCm: Number,
        volumePerCmInLiters: Number,
      },
    ],
  },

  { timestamps: true },
);

export const TankModel = mongoose.model<Tank>('Tank', TankSchema);
