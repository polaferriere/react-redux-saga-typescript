import { handleActions } from 'redux-actions';
import { addTodo,editTodo, deleteTodo, completeTodo, completeAll, clearCompleted } from '../actions/todos';

const initialState: TodoStoreState = [{
  id: 0,
  text: 'Use Redux',
  completed: false
}];

export default handleActions<TodoStoreState, TodoItemData>({
  [addTodo.type]: (state, action) => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      ...action.payload,
    }, ...state];
  },

  [deleteTodo.type]: (state, action) => {
    return state.filter(todo => todo.id !== action.payload);
  },

  [editTodo.type]: (state, action) => {
    return state.map(todo => {
      return todo.id === action.payload.id
        ? { ...todo, text: action.payload.text }
        : todo;
    });
  },

  [completeTodo.type]: (state, action) => {
    return state.map(todo => {
      return todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
  },

  [completeAll.type]: (state, action) => {
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => {
      return {
        ...todo,
        completed: !areAllMarked
      };
    });
  },

  [clearCompleted.type]: (state, action) => {
    return state.filter(todo => todo.completed === false);
  }
}, initialState);
