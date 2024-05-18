import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Navbaar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container-fluid">
      <Link to="/" className='navbar-brand'>College Database</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to={'/'} class="nav-link active" aria-current="page" >Home</Link>
          </li>
          <li class="nav-item">
            <Link to={'/about'} class="nav-link active" aria-current="page" >About</Link>
          </li>
          
          </ul>
          
          
      </div>
    </div>
  </nav>
  )
}

export default Navbaar
