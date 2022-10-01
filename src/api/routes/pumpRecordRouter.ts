import { celebrate, Segments, Joi } from 'celebrate';
import express from 'express';
import { Routes } from '../../constants';
import { requireRole } from '../../middleware/requireRole';
import PumpRecordController from '../controllers/pumpRecordController';

export const PumpRecordRouter = express.Router();

PumpRecordRouter.post(
  Routes.CreatePumpRecord,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      tankId: Joi.string().required(),
      startLevelInCm: Joi.number().integer().required(),
      endLevelInCm: Joi.number().integer().required(),
    }),
  }),
  requireRole(['driver', 'admin']),
  PumpRecordController.createPumpRecord,
);
