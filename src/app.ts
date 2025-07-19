import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();

app.use(express.json());

const filepath = path.join(__dirname, "../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("how to become a real world full sta international and to be happy");
});

app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filepath, { encoding: "utf-8" });
  console.log(data);
  res.json(data);
});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("Hello World!");
});

export default app;
