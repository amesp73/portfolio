import React from 'react';
import '../Styles/Navbar.css';
import Logo from '../Media/flower.jpeg';
import light from '../Media/sun.jpeg';
import dark from '../Media/moon.jpeg';


function Navbar({theme, setTheme}) {

    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        // console.log("clicked");
    }

  return (
        <div className='navbar'>
            <img src={Logo} alt='' className='logo'/>
            <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <img onClick={() => {toggle_mode()}} src={theme === 'light' ? dark : light} alt='' className='toggle-icon'/>
        </div>
  )
}

export default Navbar