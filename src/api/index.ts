import express, { Request, Response } from 'express';
import { Container } from 'typedi';
import { celebrate, Segments, Joi } from 'celebrate';
import { TankService } from '../services/tankService';
import { AddTankSegmentDTO, CreateTankDTO } from '../interfaces/Tank';
import { Routes } from '../constants';
import { PumpRecordService } from '../services/pumpRecordService';
import { CreatePumpRecordDTO } from '../interfaces/PumpRecord';
import { catchAsync } from '../utils/catchAsync';
import { AuthenticationService } from '../services/authenticationService';
import { LoginDTO } from '../interfaces/Authentication';
import { requireRole } from '../middleware/requireRole';

const router = express.Router();

router.post(
  Routes.CreateTank,
  requireRole(['admin']),
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      heightInCm: Joi.number().integer().required(),
      volumeInLiters: Joi.number().integer().required(),
    }),
  }),
  catchAsync(async (req: Request, res: Response) => {
    const createTankDTO: CreateTankDTO = req.body;

    const tankService = Container.get(TankService);

    const tankRecord = await tankService.createTank(createTankDTO);

    res.send(tankRecord);
  }),
);

router.post(
  Routes.AddTankSegment,
  requireRole(['admin']),
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      tankId: Joi.string(),
      startHeightInCm: Joi.number().integer().required(),
      endHeightInCm: Joi.number().integer().required(),
      volumePerCmInLiters: Joi.number().required(),
    }),
  }),
  catchAsync(async (req: Request, res: Response) => {
    const addTankSegmentDTO: AddTankSegmentDTO = req.body;

    const tankService = Container.get(TankService);

    const tankRecord = await tankService.addTankSegment(addTankSegmentDTO);

    res.send(tankRecord);
  }),
);

router.get(
  Routes.GetAllTanks,
  catchAsync(async (req: Request, res: Response) => {
    const tankService = Container.get(TankService);

    const allTanks = await tankService.getAllTanks();

    res.send(allTanks);
  }),
);

router.post(
  Routes.CreatePumpRecord,
  requireRole(['driver']),
  catchAsync(async (req: Request, res: Response) => {
    const createPumpRecordDTO: CreatePumpRecordDTO = req.body;

    const pumpRecordService = Container.get(PumpRecordService);

    const pumpRecord = await pumpRecordService.createPumpRecord(
      createPumpRecordDTO,
    );

    res.send(pumpRecord);
  }),
);

router.post(
  Routes.Login,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  catchAsync(async (req: Request, res: Response) => {
    const loginDTO: LoginDTO = req.body;

    const authenticationService = Container.get(AuthenticationService);

    const authToken = await authenticationService.login(loginDTO);

    res.send({
      status: 200,
      data: {
        authToken,
      },
    });
  }),
);

export { router };
