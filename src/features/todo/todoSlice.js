import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name;
        }
      });
    },
    reset: (state) => {
      state.todos = [];
    },
  },
});

export const todoSelector = (state) => state.todo.todos;
export const { addTodo, deleteTodo, editTodo, reset } = todoSlice.actions;
export default todoSlice.reducer;
