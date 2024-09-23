import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile';
import Timer from './Components/Timer';
import DataDisplay from './Components/DataDisplay';

function App() {
  const itemName = 'Test Name';
  window.localStorage.setItem('itemName', itemName);

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

        <br />
        <h2>Custom Hooks</h2>
        <DataDisplay />

      </header>
    </div>
  );
}

export default App;