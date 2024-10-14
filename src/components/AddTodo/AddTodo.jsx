import { useState } from 'react';

import useTodoContext from '../../hooks/useTodoContext';

import style from './AddTodo.module.css';

/**
 * AddTodo Component
 *
 * Renders a form that allows users to add new todos.
 * Utilizes the Todo context to add the todo to the global state.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered component.
 */
const AddTodo = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useTodoContext();

  /**
   * Handles the form submission.
   * Creates a new todo object and adds it to the global state.
   *
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput === '') return;

    const newTodo = {
      id: Date.now(),
      text: trimmedInput,
      completed: false,
    };

    addTodo(newTodo);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <label className="visually-hidden" htmlFor="add-todo">
        Add a new todo
      </label>
      <input
        id="add-todo"
        className={style.input}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button className={style.button} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
