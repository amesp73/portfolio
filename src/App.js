import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { useState } from 'react';


function App() {

  //initially website will be in lioght mode
  const [theme, setTheme] = useState('light');

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
