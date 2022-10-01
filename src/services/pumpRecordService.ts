import Container, { Service } from 'typedi';
import { CreatePumpRecordDTO } from '../interfaces/PumpRecord';
import { TankService } from './tankService';

@Service()
export class PumpRecordService {
  async createPumpRecord(createPumpRecordDTO: CreatePumpRecordDTO) {
    const pumpedVolume = await this.calculatePumpedVolume();
  }

  public async calculatePumpedVolume() {
    // const tankService = Container.get(TankService);
    // const { tankId } = createPumpRecordDTO;

    // const tank = await tankService.getTankById(tankId);

    return 2;
    // find segments that were pumped from
  }
}
