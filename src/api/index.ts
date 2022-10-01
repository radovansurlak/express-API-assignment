import express from 'express';
import { TankRouter } from './routes/tankRouter';
import { AuthRouter } from './routes/authRouter';
import { PumpRecordRouter } from './routes/pumpRecordRouter';

const router = express.Router();

router.use([TankRouter, AuthRouter, PumpRecordRouter]);

export { router };
