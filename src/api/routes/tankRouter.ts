import { celebrate, Segments, Joi } from 'celebrate';
import express from 'express';
import { Routes } from '../../constants';
import { requireRole } from '../../middleware/requireRole';
import TankController from '../controllers/tankController';

export const TankRouter = express.Router();

TankRouter.post(
  Routes.CreateTank,
  requireRole(['admin']),
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      heightInCm: Joi.number().integer().required(),
      volumeInLiters: Joi.number().integer().required(),
    }),
  }),
  TankController.createTank,
);

TankRouter.post(
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
  TankController.createTankSegment,
);

TankRouter.get(
  Routes.GetAllTanks,
  requireRole(['admin', 'driver']),
  TankController.getAllTanks,
);
