import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo } from "../features/todo/todoSlice";
import { toast } from "react-toastify";
const AddTodoDiv = styled.div`
  height: 125px;
  width: 50%;
  margin: 0 auto;
  position: relative;
  top: 60px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  align-items: center;
  margin-top: 20px;
  border-radius: 3px;
  box-shadow: 2px 2px 5px 1px rgba(22, 0, 0, 0.2),
    2px 2px 5px 1px rgba(22, 0, 0, 0.2), 2px 2px 5px 1px rgba(22, 0, 0, 0.2),
    2px 2px 5px 1px rgba(22, 0, 0, 0.2);
  h1 {
    font-size: 20px;
    color: #ab0022;
  }
  form {
    height: 70%;
    width: 80%;
    display: flex;
    gap: 5px;
    input[type="text"] {
      height: 30px;
      width: 75%;
      padding: 5px 20px;
      border-radius: 5px;
      outline: none;
      border: 2px solid #5b5bad;
    }
    input[type="submit"] {
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
      &:hover {
        background-color: salmon;
      }
    }
  }
  @media (max-width: 700px) {
    width: 90%;
  }
  input[type="submit"] {
    width: 15%;
  }
  input[type="text"] {
    width: 80%;
  }
`;
const AddTodo = () => {
  const [todoData, setTodoData] = useState({
    id: "",
    name: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTodoData({ ...todoData, id: nanoid(), [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoData.name.trim() === "") {
      toast.error("The todo shouldn't be empty");
    } else {
      dispatch(addTodo(todoData));
      setTodoData({ ...todoData, name: "" });
      e.target.childNodes[0].focus();
      console.log(err);
    }
  };

  const { name } = todoData;
  return (
    <AddTodoDiv>
      <h1>Add a todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={name}
          onChange={handleChange}
          name="name"
          id="name"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </AddTodoDiv>
  );
};
export default AddTodo;
