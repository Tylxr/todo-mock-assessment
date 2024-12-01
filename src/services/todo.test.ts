import { createTodo, create, getAll, clearTodos } from "./todo";

beforeEach(() => {
	clearTodos();
});

describe("Todo - Creation Function", () => {
	it("Should create a todo item", () => {
		const content = "Sample todo item";
		const todo = createTodo(content);

		expect(todo).toHaveProperty("UUID");
		expect(todo).toHaveProperty("createdAt");
		expect(todo).toHaveProperty("content", content);
	});

	it("Should create a todo item with the right structure", () => {
		const content = "Another todo item";
		const todo = createTodo(content);

		// Validate that the todo item structure is correct
		expect(todo).toMatchObject({
			UUID: expect.any(String),
			createdAt: expect.any(Date),
			content: content,
		});
	});

	it("Should create a todo item despite having no content", () => {
		const content = "";
		const todo = createTodo(content);

		// Expect the content to be an empty string but the object should still be valid
		expect(todo).toHaveProperty("content", content);
		expect(todo).toHaveProperty("UUID");
		expect(todo).toHaveProperty("createdAt");
	});
});

describe("Todo - Create Service", () => {
	it("Should fail if no content is provided", () => {
		const response = create("");

		expect(response.success).toBe(false);
		expect(response.message).toBe("Please provide string content for a todo item.");
	});

	it("Should fail if content is not a string", () => {
		const response = create(123 as unknown as string);

		expect(response.success).toBe(false);
		expect(response.message).toBe("Please provide string content for a todo item.");
	});

	it("Should succeed if content is a string", () => {
		const response = create("Valid todo content");

		expect(response.success).toBe(true);
		expect(response.message).toBe("Todo item added successfully.");
	});

	it("Should return the correct response", () => {
		const response = create("Check response content");

		expect(response).toEqual({
			success: true,
			message: "Todo item added successfully.",
		});
	});

	it("Should fail if content is null or undefined", () => {
		const responseNull = create(null as unknown as string); // Test with null
		const responseUndefined = create(undefined as unknown as string); // Test with undefined

		expect(responseNull.success).toBe(false);
		expect(responseUndefined.success).toBe(false);

		expect(responseNull.message).toBe("Please provide string content for a todo item.");
		expect(responseUndefined.message).toBe("Please provide string content for a todo item.");
	});
});

describe("Todo - Get All Service", () => {
	it("Should return the correct response", () => {
		const response = getAll();

		expect(response).toHaveProperty("items");
		expect(response.success).toBe(true);
		expect(response.message).toBeNull();
	});

	it("Should have a list of todos", () => {
		// First, create a new todo
		create("Todo item for test");

		const response = getAll();

		expect(response.items).toBeInstanceOf(Array);
		expect(response.items.length).toBeGreaterThan(0);
		expect(response.items[0]).toHaveProperty("content", "Todo item for test");
	});
});
