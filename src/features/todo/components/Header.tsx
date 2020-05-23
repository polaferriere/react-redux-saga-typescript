import * as React from 'react';
import TodoTextInput from './TodoTextInput';

export default function Header(props) {

    function handleSave(text: string) {
        if (text.length) {
            props.addTodo({ text });
        }
    }

    return (
        <div>
            <h1>Todos</h1>
            <TodoTextInput
                newTodo
                onSave={handleSave}
                placeholder="What needs to be done?" />
        </div>
    );
}
