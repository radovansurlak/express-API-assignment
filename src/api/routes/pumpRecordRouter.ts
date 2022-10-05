import { celebrate, Segments, Joi } from 'celebrate';
import express from 'express';
import { Routes } from '../../constants';
import { requireRole } from '../../middleware/requireRole';
import PumpRecordController from '../controllers/pumpRecordController';

export const PumpRecordRouter = express.Router();

PumpRecordRouter.post(
  Routes.CreatePumpRecord,
  requireRole(['driver', 'admin']),
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      tankId: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      startLevelInCm: Joi.number().integer().required(),
      endLevelInCm: Joi.number().integer().required(),
    }),
  }),
  PumpRecordController.createPumpRecord,
);
