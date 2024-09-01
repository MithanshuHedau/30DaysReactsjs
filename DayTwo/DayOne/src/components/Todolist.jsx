import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [notification, setNotification] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    showNotification(newTodos[index].completed ? 'Todo marked as completed!' : 'Todo marked as incomplete!');
  };

  const deleteTodo = (index) => {
    const todoText = todos[index].text;
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    showNotification(`Todo "${todoText}" deleted!`);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="relative">
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md p-3 bg-blue-500 text-white text-center rounded-lg shadow-md transition duration-300 z-50">
          {notification}
        </div>
      )}
      
      <div className="max-w-lg mx-auto mt-16 p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">Todo List</h1>
        
        <div className="flex mb-6">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="p-3 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition duration-300"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        
        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-4 border rounded-lg shadow-sm transition duration-300 ${
                todo.completed ? 'bg-green-100 border-green-400 line-through text-gray-500' : 'bg-gray-50 border-gray-200'
              }`}
            >
              {todo.text}
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1 text-sm rounded-lg transition duration-300 ${
                    todo.completed ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                  onClick={() => toggleComplete(index)}
                >
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
