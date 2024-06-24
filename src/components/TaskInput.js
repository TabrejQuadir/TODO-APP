import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import { v4 as uuidv4 } from 'uuid';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ id: uuidv4(), text: task, completed: false }));
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">Add Task</button>
        </div>
      </div>
    </form>
  );
};

export default TaskInput;
