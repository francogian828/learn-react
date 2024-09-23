import logo from './logo.svg';
import './App.css';
import SignupForm from './Components/SignUpForm';

function App() {
  const itemName = 'Test Name';
  window.localStorage.setItem('itemName', itemName);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Form Handling</h1>
        <SignupForm></SignupForm>
      </header>
    </div>
  );
}

export default App;