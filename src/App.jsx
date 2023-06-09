import React from 'react';
import Navbar from './component/Navbar';
import QuoteComponent from './component/QuoteComponent';
import TodoList from './component/todo/todolist';
import SingleList from './component/todo/singlelist';

const App = () => {
  return (
    <div>
      <Navbar />
      <QuoteComponent />
      <hr /><br />
      <TodoList />
      <hr /><br />
      <SingleList />
    </div>
  );
};

export default App;