import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { TextField, Button } from '@mui/material';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addTodo({
            id: Date.now(),
            text,
        }));
        setText('');
    };

    return (
        <div>
            <TextField label="Add Todo" variant="outlined" value={text} onChange={(e) => setText(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>
        </div>
    );
};

export default AddTodo;