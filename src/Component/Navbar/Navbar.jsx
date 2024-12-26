import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './navbar.css'
export default function Navbar() {
  return (
<nav className="navbar   navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">Start Bootstrap
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse p-3" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={"/portfolio"}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/contact"}>Contact</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

  )
}
