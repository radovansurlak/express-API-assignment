import Container, { Service } from 'typedi';
import { CreatePumpRecordDTO } from '../interfaces/PumpRecord';
import { Tank } from '../interfaces/Tank';
import { TankService } from './tankService';

@Service()
export class PumpRecordService {
  async createPumpRecord(createPumpRecordDTO: CreatePumpRecordDTO) {
    // const pumpedVolume = await this.calculatePumpedVolume();
  }

  public async calculatePumpedVolume({
    tank,
    startHeightInCm,
    endHeightInCm,
  }: {
    tank: Tank;
    startHeightInCm: number;
    endHeightInCm: number;
  }) {
    let totalVolumePumped = 0;

    let topCursor = startHeightInCm;

    const availableSegments = [...tank.segments];

    while (topCursor !== endHeightInCm) {
      const currentTopCursor = topCursor;

      const currentSegment = availableSegments.find(
        (segment) =>
          segment.startHeightInCm >= currentTopCursor &&
          segment.endHeightInCm <= currentTopCursor,
      );

      if (!currentSegment) break;

      const segmentIndex = availableSegments.indexOf(currentSegment);

      const centimetersPumped =
        startHeightInCm >= currentSegment.endHeightInCm
          ? currentTopCursor - currentSegment.endHeightInCm
          : currentTopCursor - currentSegment.endHeightInCm;

      totalVolumePumped +=
        centimetersPumped * currentSegment.volumePerCmInLiters;
      topCursor -= centimetersPumped;

      availableSegments.splice(segmentIndex, 1);
    }

    return totalVolumePumped;
  }
}
