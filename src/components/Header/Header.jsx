import React from 'react'
import './header.css'
import logo1 from './logo1.png'

const Header = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo1}/>
        </div>
        <div className='tagLinks'>
        <a href="">Home</a>
        <a href="">Tags</a>
        </div>
    </div>
  )
}

export default Header