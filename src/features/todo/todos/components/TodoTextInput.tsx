import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

export default function TodoTextInput(props) {

  // eslint-disable-next-line
  const [text, saveText] = useState(props.text || '');

  function handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      props.onSave(text);
      if (props.newTodo) {
        saveText('');
      }
    }
  }

  function handleChange(e) {
    saveText(e.target.value);
  }

  function handleBlur(e) {
    const text = e.target.value.trim();
    if (!props.newTodo) {
      props.onSave(text);
    }
  }

    return (
      <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="todo"
          label={props.placeholder}
          name="todo"
          autoFocus
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleSubmit} />
          
    );

}
