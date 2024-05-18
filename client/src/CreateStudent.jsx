import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateStudent = () => {
    const [values, setValues]= useState({
        Name:"",
        Email:"",
        Phone:"",
        DateOfBirth:''
    })
    const navigate =useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3030/create',values)
        .then(res => navigate('/'))
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex align-items-center flex-column mt-3'>
            <h3>Add Student Data</h3>
            <form className='w-50' onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <label for="Name" className="form-label">Name:</label>
                    <input type="text" className="form-control" placeholder="Enter the Name" name="Name"
                     onChange={(e) => setValues({...values, Name: e.target.value}) } />
                </div>
                <div className="mb-3 ">
                    <label for="Email" className="form-label">Email:</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="Email"
                     onChange={(e) => setValues({...values, Email: e.target.value}) } />
                </div>
                <div className="mb-3 ">
                    <label for="Phone" className="form-label">Phone Number:</label>
                    <input type="number" className="form-control" placeholder="Enter Phone Number" name="Phone" 
                     onChange={(e) => setValues({...values, Phone: e.target.value}) }/>
                </div>
                <div className="mb-3">
                    <label for="DateOfBirth" className="form-label">Date Of Birth:</label>
                    <input type="date" className="form-control"  name="DateOfBirth" 
                     onChange={(e) => setValues({...values, DateOfBirth: e.target.value}) }/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default CreateStudent
