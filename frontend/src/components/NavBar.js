import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (

    <>
      <header>
        <div className='nav-bar-container'>
          <Link to="/">
            <h1>Workout Buddy 🏋</h1>
          </Link>
          <nav>
            <div>
              <Link to="/login">Login</Link>
              <Link to ="/signup">Sign Up</Link>
            </div>
          </nav>
        </div>
       
      </header>
    </>
  )
}

export default NavBar