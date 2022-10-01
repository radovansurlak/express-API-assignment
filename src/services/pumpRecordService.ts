import Container, { Service } from 'typedi';
import { CreatePumpRecordDTO } from '../interfaces/PumpRecord';
import { TankSegment } from '../interfaces/Tank';
import { PumpRecordModel } from '../models/PumpRecord';
import { AppError } from '../utils/error/errors';
import { TankService } from './tankService';

@Service()
export class PumpRecordService {
  async createPumpRecord({
    tankId,
    startLevelInCm,
    endLevelInCm,
  }: CreatePumpRecordDTO) {
    const tankService = Container.get(TankService);

    const tank = await tankService.getTankById(tankId);

    if (!tank) {
      throw new AppError('Specified tank not found');
    }

    const volumePumpedInLiters = await this.calculatePumpedVolume({
      segments: tank.segments,
      startLevelInCm,
      endLevelInCm,
    });

    const pumpRecord = await PumpRecordModel.create({
      volumePumpedInLiters,
      startLevelInCm,
      endLevelInCm,
      tankId,
    });

    return pumpRecord;
  }

  public async calculatePumpedVolume({
    segments,
    startLevelInCm,
    endLevelInCm,
  }: {
    segments: TankSegment[];
    startLevelInCm: number;
    endLevelInCm: number;
  }) {
    let volumePumpedInLiters = 0;

    let topCursor = startLevelInCm;

    const availableSegments = [...segments];

    while (topCursor !== endLevelInCm) {
      const currentTopCursor = topCursor;

      const currentSegment = availableSegments.find(
        (segment) =>
          segment.startHeightInCm >= currentTopCursor &&
          segment.endHeightInCm <= currentTopCursor,
      );

      if (!currentSegment) break;

      const segmentIndex = availableSegments.indexOf(currentSegment);

      const centimetersPumped =
        endLevelInCm >= currentSegment.endHeightInCm
          ? currentTopCursor - endLevelInCm
          : currentTopCursor - currentSegment.endHeightInCm;

      volumePumpedInLiters +=
        centimetersPumped * currentSegment.volumePerCmInLiters;
      topCursor -= centimetersPumped;

      availableSegments.splice(segmentIndex, 1);
    }

    return volumePumpedInLiters;
  }
}
