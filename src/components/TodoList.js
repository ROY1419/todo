import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/actions';
import { List, ListItem, ListItemText, Button, TextField } from '@mui/material';

const TodoList = () => {
    const { todos, searchTerm } = useSelector((state) => state);
    const dispatch = useDispatch();

    const filteredTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleUpdate = (id, updatedText) => {
        dispatch(updateTodo(id, updatedText));
    };

    return (
        <List>
            {filteredTodos.map((todo) => (
                <ListItem key={todo.id}>
                    <TextField
                        variant="outlined"
                        value={todo.text}
                        onChange={(e) => handleUpdate(todo.id, e.target.value)}
                    />
                    <Button color="secondary" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
                </ListItem>
            ))}
        </List>
    );
};

export default TodoList;