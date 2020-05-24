import React, { useState } from 'react';
import FooterComponent from './Footer';
import TodoTextInput from './TodoItem';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/filters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

export default function MainSection(props) {

  const [filter, setFilter] = useState(SHOW_ALL);
  const { todos, actions } = props;

  function handleClearCompleted() {
    const atLeastOneCompleted = props.todos.some(todo => todo.completed);
    if (atLeastOneCompleted) {
      props.actions.clearCompleted;
    }
  }

  function handleShow(filter: TodoFilterType) {
    setFilter(filter);
  }

  function handlerCompleteAll(e) {
    actions.completeAll("");
  }

  function renderToggleAll(completedCount: number) {
    if (todos.length > 0) {
      return (
        <input
          type="checkbox"
          title="Select/Deselect all"
          className="mt-5 mb-5"
          checked={completedCount === todos.length}
          onChange={handlerCompleteAll} />
      );
    }
  }

  function renderFooter(completedCount: number) {
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <FooterComponent filter={filter}
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={handleClearCompleted}
          onShow={handleShow} />
      );
    }
  }

  function render() {
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.reduce((count, todo) => {
      return todo.completed ? count + 1 : count;
    }, 0);

    return (
      <section>
        {renderToggleAll(completedCount)}
        <ul>
          {filteredTodos.map(todo =>
            <TodoTextInput
              key={todo.id}
              todo={todo}
              completeTodo={actions.completeTodo}
              deleteTodo={actions.deleteTodo}
              editTodo={actions.editTodo} />
          )}
        </ul>
        {renderFooter(completedCount)}
      </section>
    );
  }

  return render();

}
