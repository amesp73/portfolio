import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Logo from './flower.jpeg';
import light from './sun.jpeg';
import dark from './moon.jpeg';


function Navbar({theme, setTheme}) {

    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        // console.log("clicked");
    }

  return (
        <div className='navbar'>
            <img src={Logo} alt='' className='logo'/>
            <div className='headerMenu'>
                <Link className='headerItem'>About</Link>
                <Link className='headerItem'>Projects</Link>
                <Link className='headerItem'>Contact</Link>
            </div>
            <img onClick={() => {toggle_mode()}} src={theme === 'light' ? dark : light} alt='' className='toggle-icon'/>
        </div>
  )
}

export default Navbar