import React, { useState, useEffect } from 'react';
import { USER } from './data';
import axios from 'axios';
import AppContext from './components/AppContex';
import Dashboard from './components/Dashboard';

const api = "http://localhost:5000";
function App() {
  const [ userData, setUserData ] = useState({});
  const [ menuOption, setMenuOption ] = useState(0);

  const updateUserData = (data) => {
    axios.post(`${api}/update-user-data`, data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios.get(`${api}/user-data`)
      .then(res => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const appData = {
    user: USER,
    userData: userData,
    setUserData: setUserData,
    updateUserData: updateUserData,
    menuOption: menuOption,
    setMenuOption: setMenuOption
  }

  return (
    <AppContext.Provider value={appData}>
      <Dashboard/>
    </AppContext.Provider>
  );
}

export default App;
