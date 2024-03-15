import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';


function App() {

  //will search local storage for the current theme if available to store that
  const currentTheme = localStorage.getItem('currentTheme');

  //initially website will be in lioght mode
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  //whenever theme is updated with toggle icon it will execute this function
  useEffect(() => {
    localStorage.setItem('currentTheme', theme)
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Routes>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
