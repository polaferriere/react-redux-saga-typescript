import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction<TodoItemData>('ADD_TODO');
export const editTodo = createAction<TodoItemData>('EDIT_TODO');
export const deleteTodo = createAction<TodoItemId>('DELETE_TODO');
export const completeTodo = createAction<TodoItemId>('COMPLETE_TODO');
export const completeAll = createAction('COMPLETE_ALL');
export const clearCompleted = createAction('CLEAR_COMPLETED');
