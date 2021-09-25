import './App.css';
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Logo from './components/Logo';
import LoginForm from './components/LoginForm';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      let sessionUser = JSON.parse(userData);
      setUser({
        email: sessionUser.email,
        token: sessionUser.token
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>

      { user ? <Dashboard user={user} setUser={setUser}/> : <LoginForm setUser={setUser} /> }
    </div>
  );
}

export default App;
