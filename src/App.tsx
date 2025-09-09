import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Submit Hackathon Project', deadline: '2025-09-15', completed: false },
    { id: 2, title: 'Read React documentation', deadline: '2025-09-10', completed: false },
  ]);

  const [newTitle, setNewTitle] = useState('');

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTitle.trim() === '') return;
    const newTask = {
      id: Date.now(),
      title: newTitle,
      deadline: 'YYYY-MM-DD',
      completed: false
    };
    setTasks([...tasks, newTask]);
    setNewTitle('');
  };

  const handleDeleteTask = (idToDelete) => {
    setTasks(tasks.filter(task => task.id !== idToDelete));
  };

  const handleToggleComplete = (idToToggle) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === idToToggle) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>My Task Manager</h1>
      
      <form onSubmit={handleAddTask}>
        <input 
          type="text"
          placeholder="What needs to be done?"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.title} - (Deadline: {task.deadline})
            <button onClick={() => handleToggleComplete(task.id)}>
              {task.completed ? 'Undo' : 'Done'}
            </button>

            <button onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;