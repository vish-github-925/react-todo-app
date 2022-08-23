import Layout from "./components/Layout";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import { todoSelector } from "./features/todo/todoSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const todos = useSelector(todoSelector);
  return (
    <Layout>
      <AddTodo />
      <TodoList todos={todos} />
      <ToastContainer />
    </Layout>
  );
}

export default App;
