import React, { useState } from 'react';
import { USER } from './data';
import AppContext from './components/AppContex';
import Dashboard from './components/Dashboard';

function App() {
  const [ user, setUser ] = useState(USER);

  const appData = {
    user: user,
    setUser: setUser,
  }

  return (
    <AppContext.Provider value={appData}>
      <Dashboard/>
    </AppContext.Provider>
  );
}

export default App;
