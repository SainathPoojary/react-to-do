import useTodoContext from '../../hooks/useTodoContext';
import TodoItem from '../TodoItem';

import style from './TodoList.module.css';

/**
 * TodoList Component
 *
 * Renders a list of TodoItem components based on the current todos.
 * Displays a message if no todos are available.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered component.
 */
const TodoList = () => {
  const { todos } = useTodoContext();

  if (todos.length === 0) {
    return <p className={style.noTodos}>No todos available.</p>;
  }

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <>
      {incompleteTodos.length > 0 && (
        <ul className={style.list}>
          {incompleteTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}

      {completedTodos.length > 0 && (
        <div className={style.completedContainer}>
          <h2 className={style.completedHeading}>Completed</h2>
          <ul className={style.list}>
            {completedTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TodoList;
