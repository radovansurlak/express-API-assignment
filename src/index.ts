import express, { Express } from "express";
import dotenv from "dotenv";
import { router } from "./api";
import { connectDB } from "./config/db";
import bodyParser from "body-parser";
import { validationErrorHandler } from "./middleware/validationErrorHandler";

import "reflect-metadata";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.use(validationErrorHandler);

app.listen(port, () => {
	console.log(`⚡️ Server is running on http://localhost:${port}`);
});
