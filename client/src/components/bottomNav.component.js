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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountDrawer from './AccountDrawer.component'

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

export default function BottomNav({ value, setValue }) {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  // this is now being passed from app.js
  // const [value, setValue] = React.useState(0);

  return (

    <BottomNavigation
      value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      showLabels
      className={classes.stickToBottom}
    >

      <BottomNavigationAction label="Workout" icon={<FitnessCenterIcon />} component={NavLink} to='/'/>

      <BottomNavigationAction label="History" icon={<ListIcon />} component={NavLink} to='/history'/>

      <BottomNavigationAction label="Stats" icon={<EqualizerIcon />} component={NavLink} to='/stats'/>
      
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon onClick={toggleDrawer(true)} />} />

      <AccountDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} toggleDrawer={toggleDrawer} />

    </BottomNavigation>

  );
}