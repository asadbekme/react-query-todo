import { Todo, TodoState } from "../types/todo";

const BASE_URL = "http://localhost:3000/todos";

export async function fetchTodos(state: TodoState = "all"): Promise<Todo[]> {
  const queries = state === "all" ? "" : `?completed=${state === "completed"}`;

  const response = await fetch(`${BASE_URL}/${queries}`);

  if (!response.ok) throw new Error("Failed to fetch todos!");

  return response.json();
}

export async function toggleTodoStatus(todoId: number, completed: boolean) {
  const response = await fetch(`${BASE_URL}/${todoId}`, {
    method: "PATCH",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function createTodo(title: string) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({ title, completed: false }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
