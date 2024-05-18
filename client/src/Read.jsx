import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
    const { id } = useParams()
    const [values, setValues] = useState({
        Name: "",
        Email: "",
        Phone: "",
        DateOfBirth: ''
    })
    useEffect(() => {
        axios
            .get('http://localhost:3030/getrecord/' + id)
            .then(res => setValues({ ...values, Name: res.data[0].Name, Email: res.data[0].Email, Phone: res.data[0].Phone, DateOfBirth: res.data[0].DateOfBirth }))
            .catch(err => console.log(err));
    }, [])
    return (
        <div>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
                <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                    <h3>Student Details</h3>
                    <div className='mb-2'>
                        <strong>Name : {values.Name}</strong>
                    </div>
                    <div className='mb-2'>
                        <strong>Email : {values.Email}</strong>
                    </div>
                    <div className='mb-3'>
                        <strong>Phone : {values.Phone}</strong>
                    </div>
                    <div className='mb-3'>
                        <strong>Date Of Birth : {values.DateOfBirth}</strong>
                    </div>
                    <Link to={`/update/${id}`} className='btn btn-primary'>Edit</Link>
                    <Link to='/' className='btn btn-success ms-3'>Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Read
