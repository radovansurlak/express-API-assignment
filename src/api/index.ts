import express, { Request, Response } from "express";
import { TankService } from "../services/tankService";

const router = express.Router();

router.post("/createTank", async (req: Request, res: Response) => {
	const createTankInput = req.body;
	const tankService = new TankService();
	const createdTank = await tankService.createTank(createTankInput);
	res.send(createdTank);
});

export { router };
