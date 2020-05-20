import * as React from 'react';
import * as classNames from 'classnames';
import { TodoTextInput } from '../TodoTextInput';
import { applyMiddleware } from 'redux';

export namespace TodoItem {
  export interface Props {
    todo: TodoItemData;
    editTodo: (todo: TodoItemData) => any;
    deleteTodo: (id: number) => any;
    completeTodo: (id: number) => any;
  }

  export interface State {
    editing: boolean;
  }
}

export class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {

  constructor(props?: TodoItem.Props, context?: any) {
    super(props, context);
    this.state = {
      editing: false
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(id: number, text: string) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo({ id, text });
    }
    this.setState({ editing: false });
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(todo.id, text)} />
      );
    } else {
      element = (
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)} />

          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>

          <button onClick={() => deleteTodo(todo.id)} />
        </div>
      );
    }

    return (
      <li>
        {element}
      </li>
    );
  }
}
