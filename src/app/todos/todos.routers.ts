import express, { Request, Response } from "express";
import path from "path";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

export const todosRouter = express.Router();

// GET ALL
todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

// GET POST
todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  await collection.insertOne({
    title: title,
    description: description,
    priority: priority,
  });

  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

// GET Single
todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const todo = await collection.findOne({ _id: new ObjectId(id) });
  res.json(todo);
});

// Update todo
todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const { title, description, priority, isCompleted } = req.body;
  const filter = { _id: new ObjectId(id) };
  const updatedToDo = await collection.updateOne(
    filter,
    { $set: { title, description, priority, isCompleted } },
    { upsert: true }
  );
  res.json(updatedToDo);
});

//DELETE
todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  await collection.deleteOne({ _id: new ObjectId(id) });
  res.json({
    message: "Deleted Successfully",
  });
});
