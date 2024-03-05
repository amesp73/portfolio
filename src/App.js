import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
