import express, { Request, Response } from "express";
import { TankService } from "../services/tankService";
import { Container } from "typedi";
import { celebrate, Segments, Joi } from "celebrate";

const router = express.Router();

router.post(
	"/createTank",
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			heightInCm: Joi.number().integer().required(),
			volumeInLiters: Joi.number().integer().required(),
		}),
	}),
	async (req: Request, res: Response) => {
		const createTankDTO = req.body;

        console.log({createTankDTO})
		const tankService = Container.get(TankService);

		const tankRecord = await tankService.createTank(createTankDTO);

		res.send(tankRecord);
	}
);

export { router };
