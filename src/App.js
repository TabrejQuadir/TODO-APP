import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">React To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
