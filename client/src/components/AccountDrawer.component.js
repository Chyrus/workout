import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {  NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 150,
  },
  fullList: {
    width: 'auto',
  },
});

export default function AccountDrawer( {drawerOpen, setDrawerOpen, toggleDrawer }) {
  const classes = useStyles();


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem component={NavLink} to='/logout' button key='Log Out'>
            <ListItemIcon  style={{minWidth: '30px'}}><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary='Log Out' />
            </ListItem>
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
        <React.Fragment>

        {/* <BottomNavigationAction icon={<AccountCircleIcon onClick={toggleDrawer(true)}/>} /> */}
          {/* <Button onClick={toggleDrawer(true)}>Right</Button> */}
          <Drawer anchor={'right'} open={drawerOpen} onClose={toggleDrawer(false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}