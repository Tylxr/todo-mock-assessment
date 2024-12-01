import express, { Request, Response, NextFunction } from "express";
import todoRouter from "./routes/todo";

// Initialise app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define route
app.use("/todo", todoRouter);

// Quick and dirty error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
	res.status(500).send({ message: "Internal Server Error" });
});

export default app;
