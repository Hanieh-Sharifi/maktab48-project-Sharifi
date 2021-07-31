import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { SunShineAppBar } from '../Utils/styled-components/newColorsMaterial/coloredAppBar/coloredAppBarComponent';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom';

import logo from "../Assets/img/logo.jpg"
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display:"initial",
        [theme.breakpoints.up('sm')]:{
            display:"none",
        }
    },
    title: {
        flexGrow: 1,
    },
    logo:{
        width: "50px",
        height: "50px",
        margin:"5px 15px 5px 0px"
    },
    items:{
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end",
        flex:2,
        [theme.breakpoints.up('sm')]: {
            display: "block",
        }
    }
}));

export default function MainPageHeader() {
    const classes = useStyles();

    const history = useHistory();

    const handleManagementPage = () => {
        history.push("/admin/login");
    }

    return (
        <div className={classes.root}>
            <SunShineAppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img className={classes.logo} src={logo} alt="logo" />
                    <Typography variant="h6" className={classes.title}>
                        فروشگاه دولوپر
                    </Typography>
                    <Button color="inherit" onClick={()=>handleManagementPage()} >پنل مدیریت</Button>
                    <Button color="inherit"><ShoppingCartIcon />سبد خرید</Button>
                </Toolbar>
            </SunShineAppBar>
        </div>
    );
}
