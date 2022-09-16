import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./api";
import { connectDB } from "./config/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(router);

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.listen(port, () => {
	console.log(`⚡️ Server is running on http://localhost:${port}`);
});
