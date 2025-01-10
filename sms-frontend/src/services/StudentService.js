import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api';

export const listStudents = () => axios.get(REST_API_BASE_URL + '/students');

export const createStudent = (student) => axios.post(REST_API_BASE_URL + '/student', student)