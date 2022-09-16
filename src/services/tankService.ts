import { CreateTankDTO } from "../interfaces/Tank";
import { TankModel } from "../models/Tank";

export class TankService {
	async createTank(createTankInput: CreateTankDTO) {
		const tankRecord = await TankModel.create(createTankInput);
		return tankRecord;
	}
}
