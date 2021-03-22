import React from 'react';

const SideMenu = () =>{
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
}