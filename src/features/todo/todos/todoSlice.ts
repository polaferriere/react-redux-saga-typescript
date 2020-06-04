import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      return [{
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.payload,
      }, ...state];
    },
    deleteTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTodo(state, action) {
      return state.map(todo => {
        return todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo;
      });
    },
    completeTodo(state, action) {
      return state.map(todo => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    },
    completeAll(state, action) {
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => {
        return {
          ...todo,
          completed: !areAllMarked
        };
      });
    },
    clearCompleted(state, action) {
      return state.filter(todo => todo.completed === false);
    }
  }
})

export const { addTodo, deleteTodo, editTodo, completeTodo, completeAll, clearCompleted } = todosSlice.actions

export default todosSlice.reducer