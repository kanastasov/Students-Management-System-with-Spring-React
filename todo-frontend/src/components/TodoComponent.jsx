import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getTodo, saveTodo, updateTodo } from '../services/TodoService';

const TodoComponent = () => {

    const[title, setTitle] = useState('');
    const [description,setDecription] = useState('');
    const [completed, setCompleted] = useState(false);
    const navigate = useNavigate();

    const {id} = useParams();

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Todo</h2>
        }else {
            return <h2 className='text-center'>Add todo</h2>
        }
    }

        useEffect(() => {
            if(id){
                getTodo(id).then((res) => {
                    console.log(res);
                    setTitle(res.data.title);
                    setDecription(res.data.description);
                    setCompleted(res.data.completed);
                }).catch(err => {
                    console.log(err)
                })
            }
        }, [])


    function saveOrUpdateTodo(e){
        e.preventDefault();

        const todo = {title, description, completed};
        console.log(todo);

        if(id) {
            updateTodo(id, todo).then((res => {
                console.log(res);
                navigate('/todos');
            })).catch(err => {
                console.log(err);
            });
        }else {
        saveTodo(todo).then((response) => {
                    console.log(response);
                    navigate('/todos')
                }).catch(err => {
                    console.log(err);
                });
        }

     
    }
  return (
    <div className='container'>
        <br/>
        <br/>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            {pageTitle()}
            <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Todo Title: </label>
                        <input
                        className='form-control'
                            type='text'
                            placeholder='Enter todo title'
                            name = 'title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </input>

                        <label className='form-label'>Todo Description: </label>
                        <input
                                                className='form-control'

                            type='text'
                            placeholder='Enter todo description'
                            name = 'description'
                            value={description}
                            onChange={(e) => setDecription(e.target.value)}
                        >
                        </input>

                          <label className='form-label'>Todo Completed: </label>
                        <select className='form-control'
                        value={completed}
                        onChange={(e => setCompleted(e.target.value))}>
                            <option value ="false">No</option>
                            <option value = "true">Yes</option>

                        </select>
                    </div>

                    <button className='btn btn-success' onClick={(e) => saveOrUpdateTodo(e)}>Save</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default TodoComponent