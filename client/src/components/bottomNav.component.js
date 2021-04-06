// React
import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ListIcon from '@material-ui/icons/List';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';

// Other
import axios from 'axios'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (

    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.stickToBottom}
    >

      <BottomNavigationAction label="Workout" icon={<FitnessCenterIcon />} component={NavLink} to='/'/>

      <BottomNavigationAction label="Sign Up" icon={<ListIcon />} component={NavLink} to='/signup'/>

      <BottomNavigationAction label="Log In" icon={<EqualizerIcon />} component={NavLink} to='/login'/>
      
      <BottomNavigationAction label="Log Out" icon={<SettingsIcon />} component={NavLink} to='/logout'/>

    </BottomNavigation>

  );
}