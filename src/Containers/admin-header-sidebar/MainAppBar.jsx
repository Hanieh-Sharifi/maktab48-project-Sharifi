import React from 'react';

import { Toolbar, Typography, IconButton } from '@material-ui/core';

import { SunShineAppBar } from "../../Utils/styled-components/newColorsMaterial/coloredAppBar/coloredAppBarComponent";

import MenuIcon from '@material-ui/icons/Menu';


function MainAppBar({ handleDrawerToggle, classes}) {
    return (
        <SunShineAppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h4" noWrap>
                    پنل ادمین
                </Typography>
            </Toolbar>
        </SunShineAppBar>
    )
}

export default MainAppBar;
