import Container from 'typedi';
import type { Response, Request } from 'express';
import { AddTankSegmentDTO, CreateTankDTO } from '../../interfaces/Tank';
import { TankService } from '../../services/tankService';
import { catchAsyncMethod } from '../../utils/catchAsync';
import { handleDataResponse } from '../../utils/handleDataResponse';

class TankController {
  @catchAsyncMethod
  async createTank(request: Request, response: Response) {
    const createTankDTO: CreateTankDTO = request.body;

    const tankService = Container.get(TankService);

    const tankRecord = await tankService.createTank(createTankDTO);

    handleDataResponse(response, tankRecord);
  }

  @catchAsyncMethod
  async createTankSegment(request: Request, response: Response) {
    const addTankSegmentDTO: AddTankSegmentDTO = request.body;

    const tankService = Container.get(TankService);

    const tankRecord = await tankService.addTankSegment(addTankSegmentDTO);

    handleDataResponse(response, tankRecord);
  }

  @catchAsyncMethod
  async getAllTanks(request: Request, response: Response) {
    const tankService = Container.get(TankService);

    const allTanks = await tankService.getAllTanks();

    handleDataResponse(response, allTanks);
  }
}

export default new TankController();
