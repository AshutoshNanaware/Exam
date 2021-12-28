import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Pages/Home';
import Services from './Pages/Services';

function App() {
  return (
    <Router>

<nav  className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link  to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link  to="/about" className="nav-link active" aria-current="page" href="#">about</Link>
        </li><li className="nav-item">
          <Link  to="/services" className="nav-link active" aria-current="page" href="#">Services</Link>
        </li>
        </ul>
        </div>
        </nav>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/services" element={<Services/>}/>
</Routes>
    </Router>
  );
}

export default App;
