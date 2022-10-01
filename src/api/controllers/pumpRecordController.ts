import Container from 'typedi';
import type { Request, Response } from 'express';
import { CreatePumpRecordDTO } from '../../interfaces/PumpRecord';
import { PumpRecordService } from '../../services/pumpRecordService';
import { catchAsyncMethod } from '../../utils/catchAsync';
import { handleDataResponse } from '../../utils/handleDataResponse';

class PumpRecordController {
  @catchAsyncMethod
  async createPumpRecord(request: Request, response: Response) {
    const createPumpRecordDTO: CreatePumpRecordDTO = request.body;

    const pumpRecordService = Container.get(PumpRecordService);

    const pumpRecord = await pumpRecordService.createPumpRecord(
      createPumpRecordDTO,
    );

    handleDataResponse(response, { pumpRecord });
  }
}

export default new PumpRecordController();
