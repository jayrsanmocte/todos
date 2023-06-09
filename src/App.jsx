import React from 'react';
import Navbar from './component/Navbar';
import QuoteComponent from './component/QuoteComponent';
import TodoList from './component/todo/todolist';

const App = () => {
  return (
    <div>
      <Navbar />
      <QuoteComponent />
    <hr /><br /><br />
      <TodoList />
    </div>
  );
};

export default App;