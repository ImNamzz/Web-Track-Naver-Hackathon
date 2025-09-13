import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // --- States & Storage ---
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => { localStorage.setItem('tasks', JSON.stringify(tasks)); }, [tasks]);

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      return JSON.parse(savedCategories);
    } else {
      return [
        { id: 1, name: 'Study', keywords: ['exam', 'homework', 'report', 'essay', 'lecture', 'quiz'] },
        { id: 2, name: 'Work', keywords: ['meeting', 'project', 'deadline', 'presentation', 'client'] },
        { id: 3, name: 'Personal', keywords: ['appointment', 'shopping', 'gym', 'laundry'] },
      ];
    }
  });
  useEffect(() => { localStorage.setItem('categories', JSON.stringify(categories)); }, [categories]);

  // --- Input States ---
  const [newTitle, setNewTitle] = useState('');
  const [newDeadline, setNewDeadline] = useState('');
  const [view, setView] = useState('all');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [newKeyword, setNewKeyword] = useState({});

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTitle.trim() === '' || newDeadline === '' || selectedCategoryId === '') {
      alert("You might want a title(or deadlines (or both)).");
      return;
    }
    const newTask = { id: Date.now(), title: newTitle, deadline: newDeadline, completed: false, categoryId: parseInt(selectedCategoryId) };
    setTasks([...tasks, newTask]);
    setNewTitle('');
    setNewDeadline('');
    setSelectedCategoryId('');
  };
  const handleDeleteTask = (idToDelete) => { setTasks(tasks.filter(task => task.id !== idToDelete)); };
  const handleToggleComplete = (idToToggle) => { setTasks(tasks.map(task => task.id === idToToggle ? { ...task, completed: !task.completed } : task)); };

  const handleAddCategory = (event) => {
    event.preventDefault();
    if (newCategoryName.trim() === '') return;
    const newCategory = { id: Date.now(), name: newCategoryName, keywords: [] };
    setCategories([...categories, newCategory]);
    setNewCategoryName('');
  };
  const handleDeleteCategory = (idToDelete) => { setCategories(categories.filter(category => category.id !== idToDelete)); };

  const handleAddKeyword = (categoryId) => {
    const keywordText = newKeyword[categoryId]?.trim();
    if (!keywordText) return;
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) { return { ...category, keywords: [...category.keywords, keywordText] }; }
      return category;
    });
    setCategories(updatedCategories);
    setNewKeyword({ ...newKeyword, [categoryId]: '' });
  };
  const handleDeleteKeyword = (categoryId, keywordToDelete) => {
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) { return { ...category, keywords: category.keywords.filter(kw => kw !== keywordToDelete) }; }
      return category;
    });
    setCategories(updatedCategories);
  };
  
  const calculatePriority = (task) => {
    if (task.completed) return 0;
    const daysRemaining = (new Date(task.deadline) - new Date()) / (1000 * 60 * 60 * 24);
    if (daysRemaining < 0) return 100;
    return 1 / (daysRemaining + 0.1);
  };
  let tasksToDisplay = tasks;

  return (
    <div className="App">
      <h1>Smart Task Manager</h1>
      
      <form onSubmit={handleAddTask}>
        <input type="text" placeholder="What you don't want to miss?" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <input type="date" value={newDeadline} onChange={(e) => setNewDeadline(e.target.value)} />
        <select value={selectedCategoryId} onChange={(e) => setSelectedCategoryId(e.target.value)}>
          <option value="" disabled>Select a category</option>
          {categories.map(category => (<option key={category.id} value={category.id}>{category.name}</option>))}
        </select>
        <button type="submit">Add Task</button>
      </form>

      <div>
        <button onClick={() => setView('smart')}>Smart Sort</button>
        <button onClick={() => setView('all')}>All</button>
        <button onClick={() => setView('pending')}>Pending</button>
        <button onClick={() => setView('completed')}>Completed</button>
      </div>

      <ul>
        {tasks.map(task => {
          const category = categories.find(c => c.id === task.categoryId);
          return (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <strong style={{ color: '#007bff' }}>[{category ? category.name : 'Uncategorized'}]</strong> {task.title} - (Deadline: {task.deadline})
              <button onClick={() => handleToggleComplete(task.id)}>{task.completed ? 'Undo' : 'Done'}</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      
      <hr /> 

      <div className="category-manager">
        <h2>Manage Categories</h2>
        <form onSubmit={handleAddCategory}>
          <input type="text" placeholder="New category name" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} />
          <button type="submit">Add Category</button>
        </form>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <div className="category-header">
                {category.name}
                <button onClick={() => handleDeleteCategory(category.id)}>Delete Category</button>
              </div>

              <div className="keyword-manager">
                <ul>
                  {category.keywords.map(kw => (
                    <li key={kw} className="keyword-item">
                      <span>{kw}</span>
                      <button onClick={() => handleDeleteKeyword(category.id, kw)}>x</button>
                    </li>
                  ))}
                </ul>
                <form onSubmit={(e) => { e.preventDefault(); handleAddKeyword(category.id); }}>
                  <input type="text" placeholder="Add a keyword" value={newKeyword[category.id] || ''} onChange={(e) => setNewKeyword({ ...newKeyword, [category.id]: e.target.value })} />
                  <button type="submit">Add Keyword</button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;