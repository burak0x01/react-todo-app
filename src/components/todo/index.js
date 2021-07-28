import './main.scss';

function Todo(props) {

  return (
    <div className={props.marked ? 'todo-item marked' : 'todo-item'}>
      <div className="todo" onClick={props.markTodo}>
        <p>{props.content}</p>
      </div>
      <div className="action">
        <a href="#" onClick={props.deleteTodo}>Sil</a>        
      </div>
    </div>
  );
}

export default Todo;