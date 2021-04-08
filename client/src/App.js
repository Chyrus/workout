// React
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

// MUI
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';

// components
import Workout from './components/Workout.component';
import SignUp from './components/SignUp.component';
import Logout from './components/Logout.component'
import BottomNav from './components/BottomNav.component'
import LogIn from './components/LogIn.component'

// style
import theme from './style/theme';

// other
import axios from 'axios'

export default function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState(null);
  const [bottomNavValue, setBottomNavValue] = React.useState(10);

  const updateUser = (loggedIn, username) => {
    setLoggedIn(loggedIn);
    setUsername(username);
  }

  const getUser = () => {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        updateUser(true, response.data.user.username);
      } else {
        console.log('Get user: no user');
        updateUser(false, null);
      }
    })
  }

  useEffect(() => {
    getUser();
  }, []);
  

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />

        {loggedIn ? 
          <Route exact path="/" render={() => <Workout />} />
        :
          <Route exact path="/" render={() => <LogIn updateUser={updateUser} />} />
        }
           
        {loggedIn ?
          <Route path="/login" render={() => <Workout />} />
        :
          <Route path="/login" render={() => <LogIn updateUser={updateUser} />} />
        }

        {loggedIn ?
          <Route path="/signup" render={() => <Workout />} />
        :
          <Route path="/signup" render={() => <SignUp/>} />
        }

        {loggedIn ?
          <Route path="/logout" render={() => <Logout updateUser={updateUser} getUser={getUser} />} />
        :
          <Route path="/logout" render={() => <LogIn getUser={getUser} />} />
        }

      {loggedIn ? <BottomNav value={bottomNavValue} setValue={setBottomNavValue} /> : null}
      
    </ThemeProvider>
  );  
}