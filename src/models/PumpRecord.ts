import mongoose from 'mongoose';
import { PumpRecord } from '../interfaces/PumpRecord';

const PumpRecordSchema = new mongoose.Schema<PumpRecord>({
  tankId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  startLevelInCm: {
    type: Number,
    required: true,
  },
  endLevelInCm: {
    type: Number,
    required: true,
  },
  volumePumpedInLiters: {
    type: Number,
    required: true,
  },
});

export const PumpRecordModel = mongoose.model<PumpRecord>(
  'PumpRecord',
  PumpRecordSchema,
);
