import express from 'express';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controller/todo.controller.js';

const router = express.Router();

router.post("/create", createTodo);// http://localhost:4001/todo/create
router.get("/fetch", getTodos);// http://localhost:4001/todo/fetch
router.put("/update/:id", updateTodo);// http://localhost:4001/todo/update/68b0303eae72559e96887651
router.delete("/delete/:id", deleteTodo);// http://localhost:4001/todo/delete/68b0303eae72559e96887651

export default router;