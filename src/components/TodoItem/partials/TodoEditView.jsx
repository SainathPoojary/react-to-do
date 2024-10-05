import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import useTodoContext from '../../../hooks/useTodoContext';
import style from '../TodoItem.module.css';

/**
 * TodoEditView component displays a todo item in an editable state.
 *
 * This component shows a single todo item in an editable state and provides user interface elements to allow the user
 * to save or cancel the changes.
 *
 * @component
 *
 * @param {Object} todo - The todo item object.
 * @param {number} todo.id - Unique identifier for the todo item.
 * @param {string} todo.text - The text content of the todo item.
 * @param {boolean} todo.completed - The completion status of the todo item.
 * @param {Function} setIsEditing - A function to set the editing state for the todo item.
 *
 * @returns {JSX.Element} The rendered todo item component.
 */
const TodoEditView = ({ todo, setIsEditing }) => {
  const [editedText, setEditedText] = useState(todo.text);
  const { updateTodo } = useTodoContext();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSave = () => {
    const trimmedText = editedText.trim();
    if (trimmedText === '') return;
    if (trimmedText !== todo.text) {
      updateTodo({ ...todo, text: trimmedText });
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(todo.text);
  };

  return (
    <>
      <label className="visually-hidden" htmlFor={`edit-todo-${todo.id}`}>
        Edit todo
      </label>
      <input
        id={`edit-todo-${todo.id}`}
        ref={inputRef}
        className={style.editInput}
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label={`Edit ${todo.text} todo`}
      />
      <div className={style.right}>
        <button
          type="button"
          className={style.saveButton}
          onClick={handleSave}
          aria-label={`Save ${todo.text} todo`}
        >
          Save
        </button>
        <button
          type="button"
          className={style.cancelButton}
          onClick={handleCancel}
          aria-label={`Cancel editing ${todo.text} todo`}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

TodoEditView.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setIsEditing: PropTypes.func.isRequired,
};

export default TodoEditView;
