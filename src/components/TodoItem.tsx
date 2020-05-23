import React, { useState } from 'react';
import TodoTextInput from './TodoTextInput';
import { Form, Col, Button } from "react-bootstrap";

export default function TodoItem(props) {

    const [isEditing, setEditing] = useState(false);

    function handleDoubleClick() {
        setEditing(true);
    }

    function handleSave(id: number, text: string) {
        if (text.length === 0) {
            props.deleteTodo(id);
        } else {
            props.editTodo({ id, text });
        }
        setEditing(false);
    }

    function render() {
        const { todo, completeTodo, deleteTodo } = props;

        let element;
        if (isEditing) {
            element = (
                <TodoTextInput text={todo.text}
                    editing={isEditing}
                    onSave={(text) => handleSave(todo.id, text)} />
            );
        } else {
            element = (
                <Form.Row>
                    <Col md="1">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            title="Complete todo"
                            onChange={() => completeTodo(todo.id)} />
                    </Col>

                    <Col>
                        <Form.Label onDoubleClick={handleDoubleClick} title="Double click to edit">
                            {todo.text}
                        </Form.Label>
                    </Col>

                    <Col md="1">
                        <Button size="sm" className="btn btn-secondary" onClick={() => deleteTodo(todo.id)} title="Delete todo">Delete</Button>
                    </Col>
                </Form.Row>
            );
        }

        return (
            <li>
                {element}
            </li>
        );
    }

    return render();

}