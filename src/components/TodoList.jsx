import TodoItem from "./TodoItem";
import styled from "styled-components";
import { reset } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
const TodoListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 70px auto;
  .gridTodos {
    width: 100%;
    display: grid;
    gap: 20px;
  }
  .gridTodos.colTodos {
    grid-template-columns: 1fr 1fr;
  }
  button {
    height: 30px;
    width: 25%;
    padding: 5px 20px;
    border-radius: 5px;
    outline: none;
    border: 2px solid #5b5bad;
    text-align: center;
    background-color: #dd541d;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 30px 0px;
    &:hover {
      background-color: salmon;
    }
  }
`;
const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(reset());
  };
  return (
    <TodoListDiv>
      <h2 style={{ color: "purple" }}>Your Todos</h2>
      {todos.length < 1 && (
        <h3 style={{ marginTop: "20px" }}>You do not have any todos</h3>
      )}
      {todos && (
        <div className={`gridTodos ${todos.length > 1 ? "colTodos" : ""}`}>
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </div>
      )}
      {todos.length > 0 && <button onClick={onClick}>Reset Todos</button>}
    </TodoListDiv>
  );
};
export default TodoList;
