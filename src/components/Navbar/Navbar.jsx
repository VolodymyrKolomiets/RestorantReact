import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <header>
        <div className='navContainer'> 
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        </div>
      </header></>
  )
}

export default Navbar