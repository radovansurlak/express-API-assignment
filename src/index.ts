import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { router } from './api';
import { connectDB } from './config/db';

import 'reflect-metadata';
import { loadErrorHandlers } from './utils/loadErrorHandlers';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

loadErrorHandlers(app);


app.listen(port, () => {
  console.log(`⚡️ Server is running on http://localhost:${port}`);
});
