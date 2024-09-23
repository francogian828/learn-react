import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile';
import Event from './Components/Event';
import UserStatus from './Components/UserStatus';

function DisplayInfo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  const title = 'React Props Example';
  const description = 'Props are used to pass data from one component to another.';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Use State</h1>
        <Profile></Profile>

        <br />
        <h1>React Props</h1>
        <DisplayInfo title={title} description={description} />

        <br />
        <h1>Events</h1>
        <Event></Event>

        <br />
        <h1>Conditional Rendering</h1>
        <UserStatus></UserStatus>
        <br />
      </header>
    </div>
  );
}

export default App;