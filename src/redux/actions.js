export const addTodo = (id , text ) => ({
    type: 'ADD_TODO',
    payload: { id, text },
});

export const updateTodo = (id, updatedText) => ({
    type: 'UPDATE_TODO',
    payload: { id, updatedText },
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id,
});

export const setSearchTerm = (term) => ({
    type: 'SET_SEARCH_TERM',
    payload: term,
});