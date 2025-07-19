"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
//
const app = (0, express_1.default)();
const filepath = path_1.default.join(__dirname, "../db/todo.json");
// ToDo Home
app.get("/", (req, res) => {
    res.send("I am learning express with TypeScript");
});
// GET All ToDos
app.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: "utf-8" });
    console.log(data);
    res.json(data);
});
// POST ToDo
app.post("/todos/create-todo", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("create todo");
});
// [app]-[express.json()]-[todosRouter]-[Root Route "/"]-[GET "/todos"]-[POST Create ToDo]
//[todosRouter]-[get all todos /todos GET]-[create todo /todos/create-todo POST todo]
exports.default = app;
/**
 * Basic File Structure.
 * Server - server handling like - starting, closing, error handling of server. only related to server
 * App File - routing handle, middleware, route related error.
 * App Folder - app business logic handling like create read update delete, database related works
 */
