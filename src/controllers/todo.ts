import { create, getAll } from "@/services/todo";
import { BaseResponse, TodoResponse } from "@/types/todo";
import { Request, Response, NextFunction } from "express";

export function createTodoItem(req: Request, res: Response, next: NextFunction) {
	const { content } = req.body;
	const itemResponse: BaseResponse = create(content);
	res.status(itemResponse.success ? 201 : 400).send(itemResponse);
}
export function getAllTodoItems(req: Request, res: Response, next: NextFunction) {
	const itemsResponse: TodoResponse = getAll();
	res.status(itemsResponse.success ? 200 : 500).send(itemsResponse);
}
