import React from 'react'
import { useState ,useEffect} from "react"
import{ListEmployee, deleteEmployee} from "../Services/EmployeeService";
import { useNavigate } from 'react-router-dom';

export default function ListEmployeeComp(){
    const [employees,setEmployees]=useState(
        [
            {"id":1001,firstName:"Ajay",lastName:"Sharma",email:"aj@gmail.com"},
            {"id":1002,firstName:"Sany",lastName:"Patil",email:"sp@gmail.com"}
        ]
    );


    useEffect(()=>{
        getAllEmployees();
    },[]);
    const getAllEmployees=()=>{
        ListEmployee()
        .then((response)=>{
            console.log(response.data);
            setEmployees(response.data);
        }).catch(error=>{
            console.log(error)
        });
    };

    const nav=useNavigate();
    const addNewEmployee=()=>{
        nav('/add-emp');
    }

    const updateEmployee=(id)=>
    {
        nav(`/edit-employee/${id}`);
    }

    const RemoveEmployee=(id)=>{
        console.log(id);

        deleteEmployee(id).then((res)=>{
            console.log(res);
            getAllEmployees();
        }).catch((error)=>{
            console.log(error);
        })
    }


return (
    <div className='container'>
        <h2>List of All Employees</h2>
        <button className='btn btn-primary mb-2 btn-primary' onClick={addNewEmployee} >Add Employee</button>
        <table className='table table-striped table-bordered table-warning '>
            <thead>
                <tr>
                    <th>Emp id</th>
                    <th>Emp First Name</th>
                    <th>Emp Last Name</th>
                    <th>Emp Email id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(emp=>
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>
                                <button className='btn btn-warning' onClick={()=>updateEmployee(emp.id)}>Update</button>
                               
                                <button className='btn btn-danger' onClick={()=>{RemoveEmployee(emp.id)}}>Delete</button>
                            </td>
                        </tr>
                        )
                }
            </tbody>
        </table>
        
    </div>
    
)

}
