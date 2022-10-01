import { celebrate, Segments, Joi } from 'celebrate';
import express from 'express';
import { Routes } from '../../constants';
import AuthController from '../controllers/authController';

export const AuthRouter = express.Router();

AuthRouter.post(
  Routes.Login,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  AuthController.login,
);
