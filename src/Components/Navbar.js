import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:'100%'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Covid➕</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li class="nav-item">
          <Link class="nav-link" to="/">Check covid cases</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/vaccination">Check vaccination slots</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}