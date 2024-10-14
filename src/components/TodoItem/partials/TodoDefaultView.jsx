import PropTypes from 'prop-types';
import { useState } from 'react';

import useTodoContext from '../../../hooks/useTodoContext';
import DialogModal from '../../DialogModal/DialogModal';
import DeleteIcon from '../../Icons/DeleteIcon';
import EditIcon from '../../Icons/EditIcon';
import style from '../TodoItem.module.css';

/**
 * TodoDefaultView component displays a todo item with options to edit, delete, and toggle completion.
 *
 * This component shows a single todo item and provides user interface elements to allow the user
 * to edit, delete, or mark the todo item as complete or incomplete.
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
const TodoDefaultView = ({ todo, setIsEditing }) => {
  const { updateTodo, removeTodo } = useTodoContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the completion status of the todo item
  const toggleCompletion = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  // Open the delete confirmation modal
  const handleRemove = () => {
    setIsModalOpen(true);
  };

  // Remove the todo item
  const handleDeleteConfirm = () => {
    removeTodo(todo.id);
  };

  // Close the delete confirmation modal
  const handleDeleteCancel = () => {
    setIsModalOpen(false);
  };

  // Set the editing state to true
  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
      <div className={style.left}>
        {/* Checkbox to toggle completion status */}
        <div>
          <label
            htmlFor={`todo-checkbox-${todo.id}`}
            className="visually-hidden"
          >
            {`Mark ${todo.text} as ${todo.completed ? 'incomplete' : 'complete'}`}
          </label>
          <input
            className={style.checkbox}
            id={`todo-checkbox-${todo.id}`}
            type="checkbox"
            checked={todo.completed}
            onChange={toggleCompletion}
          />
        </div>

        {/* Todo text */}
        <p className={style.todoText}>{todo.text}</p>
      </div>

      <div className={style.right}>
        {/* Edit Todo button */}
        <button
          type="button"
          className={style.editButton}
          onClick={handleEdit}
          aria-label={`Edit ${todo.text} todo`}
        >
          <EditIcon width={19} height={19} />
        </button>

        {/* Delete Todo button */}
        <button
          type="button"
          className={style.deleteButton}
          onClick={handleRemove}
          aria-label={`Delete ${todo.text} todo`}
        >
          <DeleteIcon width={19} height={19} />
        </button>
        <DialogModal
          isOpen={isModalOpen}
          title="Delete Todo"
          message={`Are you sure you want to delete the todo "${todo.text}"?`}
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
          confirmText="Delete"
          cancelText="Cancel"
        />
      </div>
    </>
  );
};

TodoDefaultView.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setIsEditing: PropTypes.func.isRequired,
};

export default TodoDefaultView;
