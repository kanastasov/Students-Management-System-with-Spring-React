import axios from 'axios';

const DEPARTMENT_REST_API_BASE_URL = 'http://localhost:8080/api/departments'

export const getAllDepartments = () => axios.get(DEPARTMENT_REST_API_BASE_URL);

export const createDepartment = (department) => {
    return axios.post(DEPARTMENT_REST_API_BASE_URL, department); // Ensure `department` is not null or undefined
};

export const getDepartmentById = (departmentId) => axios.get(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId);

export const updateDepartment = (deparmentId, department) => axios.put(DEPARTMENT_REST_API_BASE_URL+ '/' + deparmentId, department);
