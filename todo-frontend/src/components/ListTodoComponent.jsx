import React, { useEffect } from 'react'
import { useState } from 'react';
import { getAllTodos } from '../services/TodoService';
import {useNavigate, useParams} from 'react-router-dom';

const ListTodoComponent = () => {


  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    listTodos();
  }, [])


  function listTodos() {
    getAllTodos().then((response) => {
        setTodos(response.data);
    }).catch(err => {
        console.log(err);
    });
  }

  function addTodo() {
    navigate('/add-todo');
  }

  function updateTodo(id){
      navigate(`/update-todo/${id}`);
  }

  function deleteTodo(id){

  }

  return (
    // <h1>sssss</h1>
     <div className="container">
        <h2 className='text-center'>List of todos</h2>
        <button className='btn btn-primary mb-2' onClick={addTodo}> Add todo

        </button>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                  <th>Todo Title  </th>
                     <th>Todo description  </th>
                        <th>Todo completed  </th>
                         <th>Actions  </th>
              </tr>
                  </thead>
              <tbody>
                {
                  todos.map( (todo) =>  
                    <tr key={todo.id}>
                      <td> {todo.title} </td>
                      <td>{todo.description}</td>
                      <td>{todo.completed ? 'Yes' : 'No'}</td>
                        <td>
                                    <button className='btn btn-info' onClick={()=> updateTodo(todo.id)}>
                                        Update
                                    </button>
                                         <button className='btn btn-danger' onClick={()=> deleteTodo(todo.id)}>
                                        Delete
                                    </button>
                                </td>
                  </tr>
                  )
                }
                  
              </tbody>
        
          </table>
    </div>
  )
}

export default ListTodoComponent