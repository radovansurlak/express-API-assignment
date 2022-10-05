import type { ObjectId } from 'mongoose';

export interface CreatePumpRecordDTO {
  startLevelInCm: number;
  endLevelInCm: number;
}

export interface PumpRecord {
  tankId: ObjectId;
  startLevelInCm: number;
  endLevelInCm: number;
  volumePumpedInLiters: number;
}
