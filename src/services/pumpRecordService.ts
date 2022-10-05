import Container, { Service } from 'typedi';
import { CreatePumpRecordDTO } from '../interfaces/PumpRecord';
import { TankSegment } from '../interfaces/Tank';
import { PumpRecordModel } from '../models/PumpRecord';
import { AppError } from '../utils/error/errors';
import { TankService } from './tankService';

@Service()
export class PumpRecordService {
  async createPumpRecord(
    tankId: string,
    { startLevelInCm, endLevelInCm }: CreatePumpRecordDTO,
  ) {
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
    function calculatePumpedVolumeFromSegments(
      cursor: number,
      availableSegments: TankSegment[],
      litersPumped = 0,
    ): number {
      const currentSegment = availableSegments.find(
        (segment) =>
          segment.startHeightInCm >= cursor && segment.endHeightInCm <= cursor,
      );

      if (!currentSegment) return litersPumped;

      const segmentIndex = availableSegments.indexOf(currentSegment);

      const centimetersPumped =
        endLevelInCm >= currentSegment.endHeightInCm
          ? cursor - endLevelInCm
          : cursor - currentSegment.endHeightInCm;

      const newLitersPumped =
        centimetersPumped * currentSegment.volumePerCmInLiters;

      const newCursor = cursor - centimetersPumped;

      const newSegments = availableSegments.filter(
        (segment, index) => index !== segmentIndex,
      );

      const totalLitersPumped = newLitersPumped + litersPumped;

      if (cursor !== endLevelInCm) {
        return calculatePumpedVolumeFromSegments(newCursor, newSegments, totalLitersPumped);
      }
      return totalLitersPumped;
    }

    const volumePumpedInLiters = calculatePumpedVolumeFromSegments(
      startLevelInCm,
      segments,
    );

    return volumePumpedInLiters;
  }
}
