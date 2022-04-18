
function App() {
  const todos = ['a todo', 'another todo', 'a third todo']

  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map((todo) => {
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

export default App;
