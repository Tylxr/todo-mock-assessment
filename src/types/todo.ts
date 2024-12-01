export interface BaseResponse {
	success: boolean;
	message: string | null;
}

export interface TodoResponse extends BaseResponse {
	items: Todo[];
}

export interface Todo {
	UUID: string;
	createdAt: Date;
	content: string;
}
