import React from 'react';
import '../Styles/Navbar.css';
import Logo from '../Media/flower.jpeg';
import light from '../Media/sun.jpeg';
import dark from '../Media/moon.jpeg';


function Navbar() {
  return (
    <div className='container'>
        <img src={Logo} alt='' className='logo'/>
        <div className='navbar'>
            <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        <img src={dark} alt='' className='toggle-icon'/>
    </div>
  )
}

export default Navbar