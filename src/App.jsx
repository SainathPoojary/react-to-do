import styles from './App.module.css';
import Logo from './assets/images/logo.png';
import AddTodo from './components/AddTodo';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import TodoList from './components/TodoList';

/**
 * The main application component for TaskFlow.
 *
 * This component serves as the entry point of the TaskFlow application,
 * rendering the main UI, including the title, error messages,
 * the add todo functionality, and the list of todos.
 *
 * @component
 * @returns {JSX.Element} The rendered application UI.
 */
function App() {
  return (
    <>
      <ErrorMessage />
      <div className={styles.container}>
        <header className={styles.header}>
          <img className={styles.logo} src={Logo} alt="TaskFlow Logo" />
          <h1 className={styles.title}>TaskFlow</h1>
        </header>
        <main className={styles.main}>
          <AddTodo />
          <TodoList />
        </main>
      </div>
    </>
  );
}

export default App;
