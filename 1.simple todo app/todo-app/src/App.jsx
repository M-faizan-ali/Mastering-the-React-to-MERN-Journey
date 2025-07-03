import { useState } from "react";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: todo.trim(), completed: false }]);
    setTodo("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todo App</h1>

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button
            onClick={addTodo}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 rounded-r-md transition"
            aria-label="Add Todo"
          >
            Add
          </button>
        </div>

        <ul>
          {todos.length === 0 && (
            <p className="text-center text-gray-400">No tasks yet. Add one above!</p>
          )}
          {todos.map(({ id, text, completed }) => (
            <li
              key={id}
              className="flex items-center justify-between mb-3 bg-gray-50 rounded-md px-4 py-2 shadow-sm"
            >
              <label className={`flex items-center space-x-3 cursor-pointer select-none`}>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => toggleComplete(id)}
                  className="form-checkbox h-5 w-5 text-pink-500"
                />
                <span className={`text-gray-900 ${completed ? "line-through text-gray-400" : ""}`}>
                  {text}
                </span>
              </label>
              <button
                onClick={() => deleteTodo(id)}
                className="text-red-500 hover:text-red-700 font-bold"
                aria-label={`Delete ${text}`}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>

        {todos.some((t) => t.completed) && (
          <button
            onClick={clearCompleted}
            className="mt-4 w-full bg-red-400 hover:bg-red-500 text-white py-2 rounded-md transition"
          >
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
}
