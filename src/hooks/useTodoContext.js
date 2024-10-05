import { useContext } from 'react';

import { TodoContext } from '../context/TodoContext';

/**
 * Custom hook to consume the TodoContext.
 *
 * @returns {Object} The context value containing todos and CRUD functions.
 * @throws {Error} If used outside of the TodoProvider.
 */
const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }

  return context;
};

export default useTodoContext;
