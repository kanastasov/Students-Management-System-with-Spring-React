import axios from 'axios';

const BASE_REST_API_URL = 'http://localhost:8080/api/todos';

// export function getAllTodos(){
//     return axios.get(BASE_REST_API_URL);
// }

export const getAllTodos = () => axios.get(BASE_REST_API_URL);


export const saveTodo = (todo) => axios.post(BASE_REST_API_URL,todo);

export const getTodo = (id) => axios.get(BASE_REST_API_URL + '/' + id);

export const updateTodo = (id, todo) => axios.put(BASE_REST_API_URL + '/' + id, todo)

export const deleteTodoService = (id) => axios.delete(BASE_REST_API_URL + '/' + id);

export const completeService = (id) => axios.patch(BASE_REST_API_URL + '/'+ id + '/complete');

export const incompleteService = (id) => axios.patch(BASE_REST_API_URL + '/'+ id + '/incomplete');


