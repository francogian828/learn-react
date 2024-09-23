// Child.js
import React, { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';

function Child() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h3>Child Component</h3>
      <p>User: {user}</p>
      <button className='btn btn-primary' onClick={() => setUser('Jane Doe')}>Change User</button>
    </div>
  );
}

export default Child;
