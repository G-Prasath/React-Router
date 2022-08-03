import React from 'react'
import {Outlet, Link} from 'react-router-dom' 

function layout() {
  return (
    <div>
        <h1>This home page</h1>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Outlet />
    </div>
  )
}

export default layout
