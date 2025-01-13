import logo from './logo.svg';
import './App.css';
import ListTodoComponent from './components/ListTodoComponent';
import { useState } from 'react';

function App() {

  const data = [
    {
      "id": 1,
      "title": "todo title",
      "description": "to do description",
      "completed": false

    },
      {
      "id": 2,
      "title": "todo title2",
      "description": "to do description2",
      "completed": false

    },
      {
      "id": 3,
      "title": "todo title3",
      "description": "to do description3",
      "completed": false

    }
  ]

  const [todos, setTodos] = useState(data);
  return (
    <div className="container">
        <h2 className='text-center'>List of todos</h2>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                  <th>Todo Title  </th>
                     <th>Todo description  </th>
                        <th>Todo completed  </th>
              </tr>
                  </thead>
              <tbody>
                {
                  todos.map( (todo) =>  
                    <tr key={todo.id}>
                      <td> {todo.title} </td>
                      <td>{todo.description}</td>
                      <td>{todo.completed ? 'Yes' : 'No'}</td>
                  </tr>
                  )
                }
                  
              </tbody>
        
          </table>
        <ListTodoComponent />
    </div>
  );
}

export default App;
