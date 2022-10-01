import express from 'express';
import { Routes } from '../../constants';
import { requireRole } from '../../middleware/requireRole';
import PumpRecordController from '../controllers/pumpRecordController';

export const PumpRecordRouter = express.Router();

PumpRecordRouter.post(
  Routes.CreatePumpRecord,
  requireRole(['driver']),
  PumpRecordController.createPumpRecord,
);
