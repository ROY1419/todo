const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    searchTerm: '',
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodos = [...state.todos, action.payload];
            localStorage.setItem('todos', JSON.stringify(newTodos));
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