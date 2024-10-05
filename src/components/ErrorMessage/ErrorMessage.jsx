import { useContext } from 'react';

import { TodoContext } from '../../context/TodoContext';

import style from './ErrorMessage.module.css';

/**
 * ErrorMessage Component
 *
 * Displays error messages to the user.
 * Provides a button to dismiss the error message.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered component.
 */
const ErrorMessage = () => {
  const { error, clearError } = useContext(TodoContext);

  if (!error) return null;

  return (
    <div className={style.container}>
      <p className={style.errorMessage}>{error}</p>
      <button
        type="button"
        className={style.closeButton}
        onClick={clearError}
        aria-label="Close error message"
      >
        &times;
      </button>
    </div>
  );
};

export default ErrorMessage;
