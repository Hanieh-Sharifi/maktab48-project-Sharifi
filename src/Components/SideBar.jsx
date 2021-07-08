import React from 'react';

import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InboxIcon from '@material-ui/icons/Inbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import { useStyles } from '../Containers/admin-header-sidebar/sideBarHeaderStyle';

import { useHistory } from 'react-router';

const drawerItems = [{ title: "کالا ها", icon: <InboxIcon /> }, { title: "موجودی و قیمت ها", icon: <AccountBalanceWalletIcon /> }, { title: "سفارش ها", icon: <ReceiptIcon /> }]

function SideBar() {

    const classes = useStyles();

    const history = useHistory();

    const logOut = () => {
        localStorage.clear();
        history.push("/admin/login")
    }

    return (
        <div>
            <Typography variant="h4" align="center" noWrap className={classes.toolbar} >
                پنل ادمین
            </Typography>
            <Divider />
            <List>
                {drawerItems?.map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText className={classes.sideBarFont}  primary={item.title} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => logOut()}>
                    <ListItemIcon><ExitToAppIcon color="error" /></ListItemIcon>
                    <ListItemText primary={"خروج"} />
                </ListItem>
            </List>
        </div>
    )
}

export default SideBar
