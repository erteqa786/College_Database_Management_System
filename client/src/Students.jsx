import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
import img1 from './images/background.jpg';

const Students = () => {
    const [Student, setStudent] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:3030')
            .then(res => setStudent(res.data))
            .catch(err => console.log(err));
    }, [])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3030/delete/'+id)
        .then(res => window.location.reload())
        .catch(err => console.log(err))
    }
    const myStyle={
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        height:'70vh',
        fontSize:'20px',
    };
    return (
        
        <div className='container mt-5'style={myStyle} >
            
           <div className='mt-3'>
        <Link to = '/create' className='btn btn-success'>+ Add Data</Link>
        </div> 
            <table className="table table-success table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Student.map( student =>
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.Name}</td>
                                <td>{student.Email}</td>
                                <td>{student.Phone}</td>
                                <td>{student.DateOfBirth}</td>
                                <td>
                                    <Link to={`/read/${student.id}`} className='btn btn-success btn-sm me-2' >View</Link>
                                    <Link to={`/update/${student.id}`} className='btn btn-primary btn-sm me-2' >Update</Link>
                                    <button type='button' onClick={() => handleDelete(student.id)} className='btn btn-danger btn-sm me-2'>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            
            
        </div>
    )
}

export default Students
