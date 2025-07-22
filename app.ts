import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();

const filepath = path.join(__dirname, "../db/todo.json");

// ToDo Home
app.get("/", (req: Request, res: Response) => {
  res.send("I am learning express with TypeScript");
});

// GET All ToDos
app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filepath, { encoding: "utf-8" });
  console.log(data);
  res.json(data);
});

// POST ToDo
app.post("/todos/create-todo", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.send("create todo");
});

// [app]-[express.json()]-[todosRouter]-[Root Route "/"]-[GET "/todos"]-[POST Create ToDo]
//[todosRouter]-[get all todos /todos GET]-[create todo /todos/create-todo POST todo]

export default app;

/**
 * Basic File Structure.
 * Server - server handling like - starting, closing, error handling of server. only related to server
 * App File - routing handle, middleware, route related error.
 * App Folder - app business logic handling like create read update delete, database related works
 */
