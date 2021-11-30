import React, { useState } from 'react';
import { USER, ACTIONS } from './data';
import AppContext from './components/AppContex';
import Dashboard from './components/Dashboard';

function App() {
  const [ user, setUser ] = useState(USER);
  const [ menuOption, setMenuOption ] = useState(0);
  const [ dashboard, setDashboard ] = useState(-1);

  const appData = {
    actions: ACTIONS,
    user: user,
    setUser: setUser,
    menuOption: menuOption,
    setMenuOption: setMenuOption,
    dashboard: dashboard,
    setDashboard: setDashboard
  }

  return (
    <AppContext.Provider value={appData}>
      <Dashboard/>
    </AppContext.Provider>
  );
}

export default App;
