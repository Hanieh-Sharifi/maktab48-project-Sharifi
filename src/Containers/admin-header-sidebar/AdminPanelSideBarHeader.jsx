import React, {useState} from 'react';

// material ui components
import { CssBaseline } from "@material-ui/core";

// material ui styles
import { useStyles} from "./sideBarHeaderStyle";

// components
import MainAppBar from './MainAppBar';
import MainNav from './MainNav';

function ResponsiveDrawer(props)
{
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = useState(false);

    // to open or close drawer on mobile
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <div className={classes.root}>
            <CssBaseline />
            <MainAppBar handleDrawerToggle={() => handleDrawerToggle()} classes={classes} />
            <MainNav classes={classes} mobileOpen={mobileOpen} handleDrawerToggle={() => handleDrawerToggle()} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
}

export default ResponsiveDrawer;

