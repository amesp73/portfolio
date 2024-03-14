import React from 'react';
import '../Styles/Navbar.css';
import Logo from '../Media/flower.jpeg';
import light from '../Media/sun.jpeg';
import dark from '../Media/moon.jpeg';


function Navbar() {
  return (
    <div className='container'>
        <div className='navbar'>
            <img src={Logo} alt='' className='logo'/>
            <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <img src={dark} alt='' className='toggle-icon'/>
        </div>
    </div>
  )
}

export default Navbar