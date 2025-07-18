import { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();

const filepath = path.join(__dirname, "../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("how to become a real world full sta international and to be happy");
});

app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filepath, { encoding: "utf-8" });
  console.log(data);
  res.send("Hello World!");
});

app.get("/todos/create-todo", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
