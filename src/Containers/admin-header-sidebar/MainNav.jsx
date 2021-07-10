import React from 'react';

import {Drawer, Hidden, } from "@material-ui/core";

import SideBar from "../../Components/SideBar";

import { useTheme } from '@material-ui/core/styles';


function MainNav({classes, mobileOpen, handleDrawerToggle},props) {

    const { window } = props;

    const theme = useTheme();

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <SideBar />
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <SideBar />
                </Drawer>
            </Hidden>
        </nav>
    )
}

export default MainNav;
