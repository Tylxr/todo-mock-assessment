import { v4 as uuidv4 } from "uuid";
import { BaseResponse, Todo, TodoResponse } from "@/types/todo";

const todos: Todo[] = [];

// Builds and returns a todo object
export const createTodo = (content: string) => ({
	UUID: uuidv4(),
	createdAt: new Date(),
	content,
});

// Create functionality
export function create(content: string): BaseResponse {
	if (!content || typeof content !== "string") {
		return {
			success: false,
			message: "Please provide string content for a todo item.",
		};
	}

	const item: Todo = createTodo(content);
	todos.push(item);

	return {
		success: true,
		message: "Todo item added successfully.",
	};
}

// Get all functionality
export function getAll(): TodoResponse {
	return { items: todos, success: true, message: null };
}

// Exported purely for testing
export const clearTodos = () => (todos.length = 0);
