import express, { Application, Request, Response } from "express";
import { todosRouter } from "./app/todos/todos.routers";
const app: Application = express();

app.use(express.json());

const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To Express Tour");
});

export default app;
