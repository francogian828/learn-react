import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Introduction to Hooks</h1>
        <h2>Use State</h2>
        <Profile></Profile>

        <br />
        <h2>Use Effect</h2>
        <Timer />
      </header>
    </div>
  );
}

export default App;