import express, { Request, Response } from "express";
import { TankService } from "../services/tankService";
import { Container } from "typedi";
import { celebrate, Segments, Joi } from "celebrate";
import { AddTankSegmentDTO, CreateTankDTO } from "../interfaces/Tank";
import { Routes } from "../constants";

const router = express.Router();

router.post(
	Routes.CreateTank,
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			heightInCm: Joi.number().integer().required(),
			volumeInLiters: Joi.number().integer().required(),
		}),
	}),
	async (req: Request, res: Response) => {
		const createTankDTO: CreateTankDTO = req.body;

		const tankService = Container.get(TankService);

		const tankRecord = await tankService.createTank(createTankDTO);

		res.send(tankRecord);
	}
);

router.post(
	Routes.AddTankSegment,
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			tankId: Joi.string(),
			startHeightInCm: Joi.number().integer().required(),
			endHeightInCm: Joi.number().integer().required(),
			volumePerCmInLiters: Joi.number().integer().required(),
		}),
	}),
	async (req: Request, res: Response) => {
		const addTankSegmentDTO: AddTankSegmentDTO = req.body;

		const tankService = Container.get(TankService);

		const tankRecord = await tankService.addTankSegment(addTankSegmentDTO);

		res.send(tankRecord);
	}
);

router.get(Routes.GetAllTanks, async (req: Request, res: Response) => {
	const tankService = Container.get(TankService);

	const allTanks = await tankService.getAllTanks();

	res.send(allTanks);
});

export { router };
