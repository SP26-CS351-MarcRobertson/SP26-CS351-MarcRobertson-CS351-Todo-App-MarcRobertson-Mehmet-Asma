import Button from './Button';

function TodoItem({ todo, onToggle, onDelete }) {
    // todo - object for each task (id, text, completed, created)
    // onToggle - function to toggle when check box is clicked
    // onDelete - function to delete the task when delete button is clicked
    
    const createdDate = new Date(todo.created);

    return (
        
        <div className="todo-item">
            {/* Checkbox to toggle status */}
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={onToggle} 
            />

            {/* Todo text with a traditional line-through styling if completed */}
            <div style={{ marginLeft: '10px', marginRight: '10px', flex: 1 }}>
                <span 
                    style={{ 
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        display: 'block'
                    }}
                > 
                    {todo.text}
                </span>
                <small style={{ color: '#666' }}>Created: {createdDate.toLocaleString()}</small>
            </div>

            {/* Delete button using our reusable Button component */}
            <Button
                text='Delete'
                onClick={onDelete} 
            />
        </div>

    );
}

export default TodoItem;