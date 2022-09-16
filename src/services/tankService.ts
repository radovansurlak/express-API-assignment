import { TankModel } from "../models/Tank";

export default class TankService {
	async createTank() {
        const tankRecord = await TankModel.create();
        return tankRecord;
    }
}
