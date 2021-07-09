import React, {useState} from 'react';

// material ui components
import { CssBaseline, Drawer, Hidden, IconButton, Toolbar, Typography} from "@material-ui/core";

// material ui icon
import MenuIcon from '@material-ui/icons/Menu';

// material ui styles
import { useTheme } from '@material-ui/core/styles';
import { useStyles} from "./sideBarHeaderStyle";

// components
import SideBar from "../../Components/SideBar";
import {SunShineAppBar} from "../../Utils/styled-components/newColorsMaterial/coloredAppBar/coloredAppBarComponent";

function ResponsiveDrawer(props)
{
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = useState(false);

    // to open or close drawer on mobile
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
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
                        <SideBar/>
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
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
}

export default ResponsiveDrawer;

