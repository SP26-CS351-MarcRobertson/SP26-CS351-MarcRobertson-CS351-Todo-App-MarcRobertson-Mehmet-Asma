// Import readt and the useState hook for statement management
import React, { useState } from "react";
// Import the CSS file for styling
import "./App.css";

// Import our custom components
import Header from "./components/Header";
import Button from "./components/Button";
import ToDoItem from "./components/TodoItem";

function App() {
  // State to hold the list of todo items
  const [todos, setTodos] = useState([]);

  // inputValue string to store current input field
  const [inputValue, setInputValue] = useState("");

  // Function updates inputValue state when user types in input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // this function ot add new todo to the list
  const handleSubmit = (event) => {
    // prevent default form submission behavior which would refresh the page
    event.preventDefault(); // Prevent form from refreshing the page

    // check if input is empty after trimming whitespace
    if (inputValue.trim() === "") {
      return; // Do not add empty todo items
    }

    // create a new todo object
    const newToDo = {
      id: Date.now(), // Unique ID based on current timestamp
      text: inputValue.trim(), // Trim whitespace from input
      completed: false, // New todos are not completed by default
    };

    // Update the todos state with the new todo item
    setTodos([...todos, newToDo]);

    // Clear the input field after adding the todo
    setInputValue("");
  };

  // This function will toggle a todos complete status
  const toggleTodo = (id) => {
    // Map over the todos array to create a new array
    setTodos(
      todos.map((todo) => {
        // If the todo's id matches, toggle its completed status
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo; // Return the todo unchanged if it doesn't match
        }
      }),
    );
  };

  // This function removes a todo from the list
  const deleteTodo = (id) => {
    // Filter out the todo with the matching id
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Header title="Todo List" />

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
          className="todo-input"
        />

        <Button type="submit" text="Add Todo" />
      </form>

      <div className="todo-list">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
