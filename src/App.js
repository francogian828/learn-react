import logo from './logo.svg';
import './App.css';
import React, { createContext, useContext, useState } from 'react';
import { UserProvider } from './Contexts/UserContext';
import Parent from './Components/Parent';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState('John Doe');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Context State Management</h1>
        <UserContext.Provider value={{ user, setUser }}>
          <UserProfile />
        </UserContext.Provider>

        <br />
        <br />
        <h1>Context State Management (Separate Components)</h1>
        <UserProvider>
          <Parent />
        </UserProvider>
      </header>
    </div>
  );
}

function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <p>Username: {user}</p>
      <button className='btn btn-primary' onClick={() => setUser('Jane Doe')}>Change Name</button>
    </div>
  );
}

export default App;


/*
function App() {
  const user = 'John Doe';
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <div>User: {user}</div>;
}

export default App;

*/
