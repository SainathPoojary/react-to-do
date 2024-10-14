import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

import {
  getTodos,
  addTodo as addTodoService,
  updateTodo as updateTodoService,
  removeTodo as removeTodoService,
} from '../services/localStorageService';

export const TodoContext = createContext();

/**
 * TodoProvider component that wraps the application and provides the state
 * and functions for managing todo items.
 *
 * This context provider manages the todo list state, including the ability
 * to add, update, remove, and clear todos. It also initializes the state
 * from Local Storage when the component mounts and handles error management
 * related to todo operations.
 *
 * @component
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components that will be wrapped by the provider
 *
 * @returns {JSX.Element} The rendered TodoProvider component.
 */
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  /**
   * Checks if localStorage is supported.
   *
   * @returns {boolean} - Returns true if localStorage is supported; otherwise false.
   */
  const checkLocalStorageSupport = () => {
    try {
      const testKey = '__localStorageTest__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Initialize todos from Local Storage on component mount
  useEffect(() => {
    if (checkLocalStorageSupport()) {
      try {
        const initialTodos = getTodos();
        setTodos(initialTodos);
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError(
        'Local storage is not supported in this browser. Data will not be saved.'
      );
    }
  }, []);

  /**
   * Adds a new todo and updates Local Storage.
   *
   * @param {Object} todo - The todo object to add.
   */
  const addTodo = (todo) => {
    if (!checkLocalStorageSupport()) {
      setTodos((prevTodos) => [...prevTodos, todo]);
      return;
    }

    try {
      addTodoService(todo);
      setTodos((prevTodos) => [...prevTodos, todo]);
    } catch (err) {
      setError(err.message);
    }
  };

  /**
   * Updates an existing todo and updates Local Storage.
   *
   * @param {Object} updatedTodo - The todo object with updated properties.
   */
  const updateTodo = (updatedTodo) => {
    if (!checkLocalStorageSupport()) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
        )
      );
      return;
    }

    try {
      updateTodoService(updatedTodo);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  /**
   * Removes a todo by ID and updates Local Storage.
   *
   * @param {number} id - The ID of the todo to remove.
   */
  const removeTodo = (id) => {
    if (!checkLocalStorageSupport()) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      return;
    }

    try {
      removeTodoService(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  /**
   * Clears the current error message.
   */
  const clearError = () => {
    setError(null);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        removeTodo,
        error,
        clearError,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
