"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = express();
const filepath = path_1.default.join(__dirname, "../db/todo.json");
app.get("/", (req, res) => {
    res.send("how to become a real world full sta international and to be happy");
});
app.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: "utf-8" });
    console.log(data);
    res.send("Hello World!");
});
app.get("/todos/create-todo", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
