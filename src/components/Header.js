import React from 'react'

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">Wheater</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
   </nav>
  )
}

export default Header
