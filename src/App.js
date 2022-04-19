import { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    const newTodos = [
      'a todo', 
      'another todo', 
      'a third todo'
    ]
    
    this.setState({todos: newTodos})
  }

  todoList() {
    return (
      <ul>
        {this.state.todos.map((todo) => {
          return (
            <li>
              {todo}
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h1>My Todos</h1>
        {this.todoList()}
      </div>
    );
  }
}

export default App;
