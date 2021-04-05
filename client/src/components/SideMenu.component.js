import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ListIcon from '@material-ui/icons/List';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import clsx from 'clsx';

const SideMenu = ({ drawerOpen, handleDrawerOpen, handleDrawerClose, classes, theme}) => {

    return(

        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{
        paper: classes.drawerPaper,
        }}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>

            <Divider />

            <List>
                <ListItem button key='Workout'>
                    <ListItemIcon className={clsx(classes.listItemIcon)}><FitnessCenterIcon /></ListItemIcon>
                    <ListItemText primary='Workout' />
                </ListItem>
                <ListItem button key='History'>
                    <ListItemIcon className={clsx(classes.listItemIcon)}><ListIcon /></ListItemIcon>
                    <ListItemText primary='History' />
                </ListItem>
                <ListItem button key='Stats'>
                    <ListItemIcon className={clsx(classes.listItemIcon)}><EqualizerIcon /></ListItemIcon>
                    <ListItemText primary='Stats' />
                </ListItem>
            </List>

            <Divider />

            <List>
                <ListItem button key='Settings'>
                    <ListItemIcon className={clsx(classes.listItemIcon)}><SettingsIcon /></ListItemIcon>
                    <ListItemText primary='Settings' />
                </ListItem>
                <ListItem button key='Help'>
                    <ListItemIcon className={clsx(classes.listItemIcon)}><HelpIcon /></ListItemIcon>
                    <ListItemText primary='Help' />
                </ListItem>
                <ListItem button key='Log Out'>
                    <ListItemIcon className={clsx(classes.listItemIcon)}><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItem>

            </List>
            
    </Drawer>
    ) 
}

export default SideMenu