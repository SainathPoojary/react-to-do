/**
 * Local Storage Service for Todo.
 *
 * This module provides functions to manage Todo items in Local Storage,
 * enabling CRUD (Create, Read, Update, Delete) operations.
 */

const STORAGE_KEY = 'TaskFlow_todos';

/**
 * Retrieves all todo items from Local Storage.
 *
 * This function fetches the todos stored under the `STORAGE_KEY` in Local Storage,
 * parses them from JSON format, and returns them as an array of todo objects.
 *
 * @returns {Array<Object>} An array of todo objects. Each todo object should have the properties:
 *                          - `id` {number}: Unique identifier for the todo item.
 *                          - `text` {string}: Description of the todo item.
 *                          - `completed` {boolean}: Indicates whether the todo item is completed.
 *
 * @throws {Error} Throws an error if unable to fetch todos from Local Storage.
 */
export const getTodos = () => {
  try {
    const todos = localStorage.getItem(STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    throw new Error('Unable to fetch todos from Local Storage.');
  }
};

/**
 * Saves an array of todo items to Local Storage.
 *
 * This function serializes the provided array of todo objects to JSON format
 * and stores it under the `STORAGE_KEY` in Local Storage.
 *
 * @param {Array<Object>} todos - An array of todo objects to save.
 *                                Each todo object should have the following properties:
 *                                - `id` {number}: Unique identifier for the todo item.
 *                                - `text` {string}: Description of the todo item.
 *                                - `completed` {boolean}: Indicates whether the todo item is completed.
 *
 * @throws {Error} Throws an error if unable to save todos to Local Storage.
 */
export const saveTodos = (todos) => {
  try {
    const serializedTodos = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, serializedTodos);
  } catch (error) {
    throw new Error('Unable to save todos to Local Storage.');
  }
};

/**
 * Adds a new todo item to Local Storage.
 *
 * This function retrieves the existing todos, adds a new todo to the array,
 * and saves the updated array back to Local Storage.
 *
 * @param {Object} todo - The todo object to add.
 *                        It must contain the following properties:
 *                        - `id` {number}: Unique identifier for the todo item.
 *                        - `text` {string}: Description of the todo item.
 *                        - `completed` {boolean}: Indicates whether the todo item is completed.
 *
 * @throws {Error} Throws an error if unable to add the new todo to Local Storage.
 */
export const addTodo = (todo) => {
  try {
    const todos = getTodos();
    const updatedTodos = [...todos, todo];
    saveTodos(updatedTodos);
  } catch (error) {
    throw new Error('Unable to add new todo to Local Storage.');
  }
};

/**
 * Updates an existing todo item in Local Storage.
 *
 * This function retrieves the current todos, updates the specified todo's properties,
 * and saves the updated array back to Local Storage.
 *
 * @param {Object} updatedTodo - The updated todo object.
 *                               It must contain the same `id` as the todo to be updated
 *                               along with the updated properties:
 *                               - `id` {number}: Unique identifier for the todo item.
 *                               - `text` {string}: Updated description of the todo item.
 *                               - `completed` {boolean}: Updated completion status.
 *
 * @throws {Error} Throws an error if unable to update the todo in Local Storage.
 */
export const updateTodo = (updatedTodo) => {
  try {
    const todos = getTodos();
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
    );
    saveTodos(updatedTodos);
  } catch (error) {
    throw new Error('Unable to update todo in Local Storage.');
  }
};

/**
 * Removes a todo item from Local Storage by its unique identifier.
 *
 * This function retrieves the current todos, filters out the todo with the specified `id`,
 * and saves the updated array back to Local Storage.
 *
 * @param {number} id - The unique identifier of the todo to remove.
 *
 * @throws {Error} Throws an error if unable to remove the todo from Local Storage.
 */
export const removeTodo = (id) => {
  try {
    const todos = getTodos();
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(updatedTodos);
  } catch (error) {
    throw new Error('Unable to remove todo from Local Storage.');
  }
};
