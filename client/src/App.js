import { useEffect, useState } from "react";

const API_BASE = "http://localhost:3001";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    GetTodos();
    console.log(todos);
  }, []);

  const GetTodos = () => {
    fetch(API_BASE + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("error", err));
  };

  

  return (
    <div className="App">
      <h1>Welcome, Mokrani</h1>
      <h4>Your tasks</h4>

      <div className="todos">
        <div className="todo">
          <div className="checkbox"></div>

          <div className="text"></div>

          <div className="delete-todo">x</div>
        </div>

        <p>You currently have no tasks</p>
      </div>

      <div className="addPopup">+</div>

      <div className="popup">
        <div className="closePopup">X</div>
        <div className="content">
          <h3>Add Task</h3>
          <input type="text" className="add-todo-input" />
          <div className="button">Create Task</div>
        </div>
      </div>
    </div>
  );
}

export default App;
