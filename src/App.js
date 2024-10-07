import './App.css';
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Search from './components/Search';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Search />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
