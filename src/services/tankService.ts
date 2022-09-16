import { Service } from "typedi";
import { AddTankSegmentDTO, CreateTankDTO } from "../interfaces/Tank";
import { TankModel } from "../models/Tank";

@Service()
export class TankService {
	async createTank(createTankDTO: CreateTankDTO) {
		const tankRecord = await TankModel.create(createTankDTO);
		return tankRecord;
	}

	async addTankSegment(addTankSegmentDTO: AddTankSegmentDTO) {
		const { tankId, startHeightInCm, endHeightInCm, volumePerCmInLiters } =
			addTankSegmentDTO;

		const updatedTankRecord = await TankModel.findOneAndUpdate(
			{ id: tankId },
			{
				$push: {
					segments: {
						startHeightInCm,
						endHeightInCm,
						volumePerCmInLiters,
					},
				},
			},
			{ new: true }
		);

		return updatedTankRecord;
	}
}
