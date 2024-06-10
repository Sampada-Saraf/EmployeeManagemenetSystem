import axios from "axios"

const REST_BASE_URL="http://localhost:8080/api/employees";

export const ListEmployee=()=>{
    return axios.get(REST_BASE_URL);
}
export const createEmployee=(employee)=>{

    return axios.post(REST_BASE_URL,employee);
 }

 export const getEmployeeById=(empId)=>{
    return axios.get(REST_BASE_URL+'/'+empId);
 }

 export const updateEmployee=(empId,emp)=>{
    return axios.put(REST_BASE_URL+'/'+empId,emp);
 }

 export const deleteEmployee=(empId)=>{
    return axios.delete(REST_BASE_URL+'/'+empId);
 }