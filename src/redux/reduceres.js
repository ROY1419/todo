const LocalTodosFormLocalStorage = () => {
    try {
        const savedTodos = JSON.parse(localStorage.getItem('todo'));
        return Array.isArray(savedTodos) ? savedTodos : [];
    } catch (error) {
        console.error('Error loading tasks from local storage', error);
        return [];
    }
}

const initialState = {
    todos: LocalTodosFormLocalStorage(),
    searchTerm: '',
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = action.payload
            const newTodos = [...state.todos, newTodo];
            console.log('Adding Todo', newTodo);
            console.log("New todos List", newTodos);
            localStorage.setItem('todos', JSON.stringify(newTodos));
            console.log('Saved todo in local storage', localStorage.getItem('todos'));
            return { ...state, todos: newTodos };

        case 'UPDATE_TODO':
            const updatedTodos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.updatedText } : todo
            );
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return { ...state, todos: updatedTodos };

        case 'DELETE_TODO':
            const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(filteredTodos));
            return { ...state, todos: filteredTodos };

        case 'SET_SEARCH_TERM':
            return { ...state, searchTerm: action.payload };

        default:
            return state;
    }
};

export default todoReducer;