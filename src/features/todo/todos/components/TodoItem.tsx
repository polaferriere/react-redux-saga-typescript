import React, { useState } from 'react';
import TodoTextInput from './TodoTextInput';
import { deleteTodo, editTodo, completeTodo } from '../todoSlice';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const mapDispatch = { deleteTodo, editTodo, completeTodo };

const TodoItem = ({ todo, deleteTodo, editTodo, completeTodo }) => {

    const [isEditing, setEditing] = useState(false);
    
    function handleDoubleClick() {
        setEditing(true);
    }

    function handleSave(id: number, text: string) {
        if (text.length === 0) {
            deleteTodo(id);
        } else {
            editTodo({ id, text });
        }
        setEditing(false);
    }

    function render() {

        let element;
        if (isEditing) {
            element = (
                <TodoTextInput text={todo.text}
                    editing={isEditing}
                    onSave={(text) => handleSave(todo.id, text)} />
            );
        } else {
            element = (
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            title="Complete todo"
                            onChange={() => completeTodo(todo.id)} />
                    </Grid>

                    <Grid item xs={8}>
                        <Typography onDoubleClick={handleDoubleClick} title="Double click to edit">
                            {todo.text}
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Button onClick={() => deleteTodo(todo.id)} title="Delete todo">Delete</Button>
                    </Grid>
                </Grid>
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

export default connect(null, mapDispatch)(TodoItem)