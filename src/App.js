import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer.js';
import Navbar from './Components/Navbar/Navbar.js';
import About from './Components/About/About.js';
import { useEffect, useState } from 'react';


function App() {

  //will search local storage for the current theme if available to store that
  const currentTheme = localStorage.getItem('currentTheme');

  //initially website will be in light mode
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  //whenever theme is updated with toggle icon it will execute this function
  useEffect(() => {
    localStorage.setItem('currentTheme', theme)
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <About />
      <Footer />
    </div>
  );
}

export default App;
