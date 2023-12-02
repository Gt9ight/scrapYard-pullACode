import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Todo 1', completed: false },
    { id: 2, text: 'Todo 2', completed: false },
    { id: 3, text: 'Todo 3', completed: false },
    // Add more todos as needed
  ]);

  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [newTodoText, setNewTodoText] = useState('');

  useEffect(() => {
    const completedCount = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;
    const percentage = (completedCount / totalTodos) * 100 || 0;
    setCompletionPercentage(percentage);
  }, [todos]);

  const handleTodoClick = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        text: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleTodoClick(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <ProgressBar percentage={completionPercentage} />
    </div>
  );
};

const ProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#ddd', marginTop: '10px' }}>
      <div
        style={{
          width: `${percentage}%`,
          height: '20px',
          backgroundColor: '#4caf50',
          transition: 'width 0.5s ease',
        }}
      ></div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
