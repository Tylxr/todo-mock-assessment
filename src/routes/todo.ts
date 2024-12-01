import { createTodoItem, getAllTodoItems } from "@/controllers/todo";
import express from "express";

const router = express.Router();

// Core routes
router.post("/", createTodoItem);
router.get("/", getAllTodoItems);

export default router;
