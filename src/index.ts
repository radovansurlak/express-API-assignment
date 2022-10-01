import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { router } from './api';
import { connectDB } from './config/db';

import 'reflect-metadata';
import { loadProcessHandlers } from './utils/process';
import { loadErrorHandlers } from './utils/error/loadErrorHandlers';


const app: Express = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

loadErrorHandlers(app);

const server = app.listen(port, () => {
  console.log(`⚡️ Server is running on http://localhost:${port}`);
});

loadProcessHandlers(server);
