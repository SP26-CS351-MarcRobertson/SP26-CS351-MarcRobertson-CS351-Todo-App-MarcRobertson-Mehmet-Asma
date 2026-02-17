import React, { useState } from "react";
import Button from './Button';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    // todo - object for each task (id, text, completed, created)
    // onToggle - function to toggle when check box is clicked
    // onDelete - function to delete the task when delete button is clicked
    
    const createdDate = new Date(todo.created);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

  const handleEditChange = (event) => {
    setEditText(event.target.value);
  };

  const handleSave = () => {
    if (editText.trim() === "") {
      alert("Todo text cannot be empty.");
      return;
    }
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.priority.toLowerCase()}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <div style={{ marginLeft: '10px', marginRight: '10px', flex: 1 }}>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editText}
              onChange={handleEditChange}
            />
            <Button text="Save" onClick={handleSave} />
            <Button text="Cancel" onClick={() => setIsEditing(false)} />
          </div>
        ) : (
          <>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <span className={`priority-badge ${todo.priority.toLowerCase()}`}>
              {todo.priority}
            </span>
            <small style={{ color: '#666' }}>Created: {createdDate.toLocaleString()}</small>
            <Button text="Edit" onClick={() => setIsEditing(true)} />
          </>
        )}
      </div>
      <Button text='Delete' onClick={onDelete} />
    </div>
  );
}

export default TodoItem;