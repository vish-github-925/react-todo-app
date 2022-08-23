import Layout from "./components/Layout";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import { todoSelector } from "./features/todo/todoSlice";

function App() {
  const todos = useSelector(todoSelector);
  return (
    <Layout>
      <AddTodo />
      {console.log(todos)}
      <TodoList todos={todos} />
    </Layout>
  );
}

export default App;
