import './App.scss';
import Todo from './components/todo';
import Alert from './components/alert'
import {useState} from 'react';
// import todoJson from './data.json'; // local json read

function App() {

	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);	
	const [count, setCount] = useState(80);

	// 80 geri say
	const inputHandle = e => {
		setInput(e.target.value);
		
		setCount(80 - e.target.value.length)
	}			
	
	const addTodo = () => {			

		let newTodo = {								
			"name": input,
			"done": false
		   }		

		setInput("");

		setTodos([...todos, newTodo]);
	}

	const onEnter = (e) => {		

		if(e.key === "Enter") {
			e.preventDefault();

			if(input && input.trim().length >= 1) 
			{
				console.log(input.length);
				if(!todos.find(todo => (todo.name === input))) 
				{
					if(todos.length < 7) {

						addTodo();				
					}
					else {
						alert("Daha fazla todo ekleyemezsiniz!");
						setInput('');
					}
				}
				else {
					alert("Zaten böyle bir todo eklediniz");
				}
			}			
						
			setCount(80);
		}
	}

	const markTodo = (todoKey) => {

		setTodos(
			todos.filter((todo, key) => {
				if(todoKey === key) {
					todo.done = !todo.done;
				}			

				return todo;
			})
		)					
	}

	const deleteTodo = (todoKey) => {

		setTodos(
			todos.filter((todo, key) => {
				if(todoKey !== key) {

					return todo;
				}
			})
		)
	}

	// External Api 
	// useEffect(() => {
		
	// 	fetch('https://60eda8aa5958940017140919.mockapi.io/todos')
	// 			.then(res => res.json())
	// 			.then(data => setTodos(data))	

	// }, [setTodos])	

	// useEffect(() => {
	// 	setTodos(todoJson);
	// }, [setTodos])

	return (
		<div className="container">
			<div className="wrapper">
				<div className="header">
					<p>React Todo App</p>
					<div className="text">
						<form onSubmit={(e) => e.preventDefault()}>
							<div className="count">
								<span>{count}</span>
							</div>
							<textarea 
								name="todoInput" 
								id="todoInput" 
								maxLength="80"
								placeholder="Yeni Todo"
								value={input}
								onChange={inputHandle}	
								onKeyPress={onEnter}																							
							></textarea>															
						</form>						
					</div>          
				</div>		
				<div className="line"></div>
				<div className="body">
				{				
				(
				todos.length > 0 
				? 
					todos.map((todo, key) => (
						<Todo 					
							key={key}						
							content={todo.name}
							markTodo={() => markTodo(key)}
							deleteTodo={() => deleteTodo(key)}
							marked={todo.done}
						/>	
					))				
				:
					<Alert 
						alertType="alert warning"
						text="Henüz Todo eklemediniz"
					/>
				)															
				}
				</div>
			</div>
		</div>
	);
}

export default App;
