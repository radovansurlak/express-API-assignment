import { Service } from 'typedi';
import {
  AddTankSegmentDTO,
  CreateTankDTO,
} from '../interfaces/Tank';
import { TankModel } from '../models/Tank';

@Service()
export class TankService {
  async createTank(createTankDTO: CreateTankDTO) {
    const tankRecord = await TankModel.create(createTankDTO);
    return tankRecord;
  }

  async getTankById(tankId: string) {
    const tank = await TankModel.findOne({ _id: tankId });
    return tank;
  }

  async addTankSegment(tankId: string, addTankSegmentDTO: AddTankSegmentDTO) {
    const { startHeightInCm, endHeightInCm, volumePerCmInLiters } =
      addTankSegmentDTO;

    const updatedTankRecord = await TankModel.findOneAndUpdate(
      { _id: tankId },
      {
        $push: {
          segments: {
            startHeightInCm,
            endHeightInCm,
            volumePerCmInLiters,
          },
        },
      },
      { new: true },
    );

    return updatedTankRecord;
  }

  async getAllTanks() {
    const allTanks = await TankModel.find({});

    return allTanks;
  }
}
