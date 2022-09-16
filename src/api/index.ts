import express, { Request, Response } from "express";
const router = express.Router();

// define the home page route
router.post("/createTank", (req: Request, res: Response) => {
	res.send("Birds home page");
});
// define the about route

export { router };
