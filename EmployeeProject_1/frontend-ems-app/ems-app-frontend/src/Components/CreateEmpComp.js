import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createEmployee } from "../Services/EmployeeService";
// import React from "react";

export default function CreateEmpComp(){

    const [firstName,setFirstName]=useState('');
     const [lastName,setLastName]=useState('');
     const [email,setEmail]=useState('');

    const nav=useNavigate();
    const saveEmployee=(event)=>{ 
         event.preventDefault();
         const employee={firstName,lastName,email};
         console.log(employee);
    
         createEmployee(employee).then((response)=>{
         console.log(response.data);
         nav('/');
    })
     }

    return <>
    <h1>Add Employee</h1>
    <div className='container'>
     <br></br>
    <div className='row'>
    <div className='card col-md-6 offset-md-3 offset-md-3'>
    <h2 className='text-center'>Add Employee</h2>
    <div class="card-body">
    <form>
     <div className='form-group mb2' >
    <label className='form-label'>First Name</label>
    <input type='text' placeholder='Enter the first name' name='firstName' value={firstName}
    className='form-control' onChange={(event)=>{setFirstName(event.target.value)}}></input>
    </div>

    <div className='form-group mb2' >
    <label className='form-label'>Last Name</label>
    <input type='text' placeholder='Enter the last name' name='lastName' value={lastName}
    className='form-control' onChange={(event)=>{setLastName(event.target.value)}}></input>
    </div>

         <div className='form-group mb2' >
 
            <label className='form-label'>Email Id</label>
            <input type='text' placeholder='Enter the email id' name='email' value={email}
                className='form-control' onChange={(event)=>{setEmail(event.target.value)}}></input>
                        </div>

                        <button className='btn btn-dark' onClick={saveEmployee}>Save Employee</button>

                    </form>
         </div>

     </div>

     </div>

     </div>


    </>
}
