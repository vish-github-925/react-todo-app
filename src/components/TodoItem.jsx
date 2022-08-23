import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { deleteTodo, editTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const TodoItemDiv = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
  min-height: 40px;
  box-shadow: 2px 2px 5px 1px rgba(22, 0, 0, 0.2),
    2px 2px 5px 1px rgba(22, 0, 0, 0.2), 2px 2px 5px 1px rgba(22, 0, 0, 0.2),
    2px 2px 5px 1px rgba(22, 0, 0, 0.2);
  .item-on-show {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    span {
      color: purple;
      width: 70%;
      word-wrap: break-word;
    }
    .btns {
      display: flex;
      align-items: center;
      .icon {
        cursor: pointer;
        margin: auto 10px;
      }
    }
  }
  .item-on-edit {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 15px;
    input {
      height: 30px;
      width: 65%;
      padding: 5px 20px;
      border-radius: 5px;
      outline: none;
      border: 2px solid #5b5bad;
    }
    .btns {
      display: flex;
      margin-left: 5px;
      button {
        cursor: pointer;
        border: none;
        width: max-content;
        padding: 10px;
        background-color: white;
      }
    }
  }
`;

const iconStyle = { color: "purple" };
const TodoItem = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");
  const dispatch = useDispatch();
  const onDelete = () => {
    console.log(todo.id);
    dispatch(deleteTodo(todo.id));
  };
  const onClickEdit = () => {
    setIsEdit(true);
  };
  const onEdit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: todo.id, name: editedTodo }));
    setIsEdit(false);
    setEditedTodo("");
  };
  const onCancel = () => {
    setIsEdit(false);
  };

  return (
    <TodoItemDiv>
      <div className="item-on-show">
        <span>{todo.name}</span>
        <div className="btns">
          <div className="icon" onClick={onDelete}>
            {" "}
            <AiFillDelete style={iconStyle} />
          </div>
          <div className="icon" onClick={onClickEdit}>
            <FaEdit style={iconStyle} />
          </div>
        </div>
      </div>
      {isEdit && (
        <form onSubmit={onEdit} className="item-on-edit">
          <input
            type="text"
            placeholder="Edit the todo"
            value={editedTodo}
            name="name"
            id="name"
            onChange={(e) => setEditedTodo(e.target.value)}
            required
          />
          <div className="btns">
            <button className="icon" type="submit">
              <FaSave style={iconStyle} />
            </button>
            <button className="icon" onClick={onCancel}>
              <FaTimes style={iconStyle} />
            </button>
          </div>
        </form>
      )}
    </TodoItemDiv>
  );
};
export default TodoItem;
