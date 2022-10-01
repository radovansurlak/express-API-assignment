import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { router } from './api';
import { connectDB } from './config/db';

import 'reflect-metadata';
import { loadErrorHandlers } from './utils/error/loadErrorHandlers';

connectDB();

export const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

loadErrorHandlers(app);
