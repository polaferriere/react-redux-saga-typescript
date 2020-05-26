import * as React from 'react';
import TodoTextInput from './TodoTextInput';
import {addTodo} from '../todoSlice';
import { connect } from 'react-redux';

const mapDispatch = {addTodo};

const Header = ({addTodo}) => {

    function handleSave(text: string) {
        if (text.length) {
            addTodo(text);
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

export default connect(null, mapDispatch)(Header)
