import { Service } from "typedi";
import { CreateTankDTO } from "../interfaces/Tank";
import { TankModel } from "../models/Tank";

@Service()
export class TankService {
	async createTank(createTankDTO: CreateTankDTO) {
		const tankRecord = await TankModel.create(createTankDTO);
		return tankRecord;
	}
}
