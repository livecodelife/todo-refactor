import { Component } from 'react'

class App extends Component() {
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

    this.setState({...this.state, todos: newTodos})
  }

  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li>
                {todo}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
