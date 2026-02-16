import Button from './Button';

function TodoItem({ todo, onToggle, onDelete }) {
    // todo - object for each task (id, text, completed)
    // onToggle - function to toggle when check box is clicked
    // onDelete - function to delete the task when delete button is clicked
    
    return (
        
        <div className="todo-item">
            {/* Checkbox to toggle stats */}
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={onToggle} 
            />

            {/* Todo text with a tradition line-through styling if completed */}
            <span 
                style={{ 
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    marginLeft: '10px',
                    marginRight: '10px'
                }}
            > 
                {todo.text}
            </span>

            {/* Delete button using our reusable Button component */}
            <Button
                text='Delete'
                onClick={onDelete} 
            />
        </div>

    );
}

export default TodoItem;