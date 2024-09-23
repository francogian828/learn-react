import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Routing</h1>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            &nbsp;
            <Link to="/about">About</Link>
          </nav>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}


export default App;