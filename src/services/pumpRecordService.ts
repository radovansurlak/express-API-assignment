import Container, { Service } from "typedi";
import { CreatePumpRecordDTO } from "../interfaces/PumpRecord";
import { PumpRecordModel } from "../models/PumpRecord";
import { TankService } from "./tankService";

@Service()
export class PumpRecordService {
	async createPumpRecord(createPumpRecordDTO: CreatePumpRecordDTO) {
		const pumpedVolume = await this.calculatePumpedVolume(createPumpRecordDTO);
	}

	private async calculatePumpedVolume(
		createPumpRecordDTO: CreatePumpRecordDTO
	) {
		const tankService = Container.get(TankService);
		const { tankId } = createPumpRecordDTO;

		const tank = await tankService.getTankById(tankId);

        // find segments that were pumped from


	}
}
