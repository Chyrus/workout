// React
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// MUI
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';

// components
import Workout from './components/workout.component';
import Signup from './components/signup.component';
import LoginForm from './components/loginForm.component'
import Logout from './components/logout.component'
import BottomNav from './components/bottomNav.component'

// style
import theme from './style/theme';
import axios from 'axios'

export default function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState(null);

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
  });
  

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />

      
        {loggedIn ? <Typography>Hello {username}</Typography> : null}
      

      <BrowserRouter>

        <Route
          exact path="/"
          render={() =>
            <Workout />}
        />

        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={updateUser}
            />}
        />

        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />

        <Route
          path="/logout"
          render={() =>
            <Logout
              updateUser={updateUser}
              getUser={getUser}
            />}
        />

      

      <BottomNav/>

      </BrowserRouter>
      
    </ThemeProvider>
  );  
}