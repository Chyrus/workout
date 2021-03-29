import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ListIcon from '@material-ui/icons/List';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';

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
      <BottomNavigationAction label="Workout" icon={<FitnessCenterIcon />} />
      <BottomNavigationAction label="History" icon={<ListIcon />} />
      <BottomNavigationAction label="Stats" icon={<EqualizerIcon />} />
      <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
}