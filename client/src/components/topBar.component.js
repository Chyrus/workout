import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const TopBar= ({ drawerOpen, handleDrawerOpen, handleDrawerClose, classes, theme}) => {
    
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: drawerOpen,
            })}
        >
            <Toolbar>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, drawerOpen && classes.hide)}>
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" noWrap>
                    Workout Tracker
                </Typography>

            </Toolbar>
            
        </AppBar>
    )
}

export default TopBar