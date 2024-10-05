import PropTypes from 'prop-types';
import { useState } from 'react';

import TodoDefaultView from './partials/TodoDefaultView';
import TodoEditView from './partials/TodoEditView';
import style from './TodoItem.module.css';

/**
 * TodoItem Component
 *
 * Renders a single todo item with functionality to toggle completion,
 * edit the todo text, and delete the todo.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {Object} props.todo - The todo item to display.
 * @param {number} props.todo.id - The unique identifier for the todo item.
 * @param {string} props.todo.text - The text content of the todo item.
 * @param {boolean} props.todo.completed - The completion status of the todo item.
 *
 * @returns {JSX.Element} The rendered component.
 */
const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={style.todoItem}>
      {isEditing ? (
        <TodoEditView todo={todo} setIsEditing={setIsEditing} />
      ) : (
        <TodoDefaultView todo={todo} setIsEditing={setIsEditing} />
      )}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
