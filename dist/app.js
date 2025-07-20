"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_routers_1 = require("./app/todos/todos.routers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
app.use("/todos", todos_routers_1.todosRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => {
    res.send("Welcome To Express Tour");
});
exports.default = app;
