import React, {useState} from 'react';
import { Form } from "react-bootstrap";

export default function TodoTextInput(props) {

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
      <Form.Control
        type="text"
        autoFocus
        placeholder={props.placeholder}
        value={text}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleSubmit} />
    );

}
