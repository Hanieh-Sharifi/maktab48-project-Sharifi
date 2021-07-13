import React from 'react';

// material ui components
import { List, ListItem, ListItemText, Divider, ListItemIcon} from "@material-ui/core";

// material ui icons
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InboxIcon from '@material-ui/icons/Inbox';
import HomeIcon from '@material-ui/icons/Home';

// material ui styles
import { useStyles } from '../Containers/admin-header-sidebar/sideBarHeaderStyle';

// route imports
import { useHistory } from 'react-router-dom';

// components
import SideBarItems from './SideBarItem';


const drawerItems = [{title: "صفحه اصلی", icon: <HomeIcon/>}, { title: "کالا ها", icon: <InboxIcon /> }, { title: "موجودی و قیمت ها", icon: <AccountBalanceWalletIcon /> }, { title: "سفارش ها", icon: <ReceiptIcon /> }]


function SideBar() {
    
    const classes = useStyles();

    const history = useHistory();

    // logging out
    const logOut = () => {
        localStorage.clear();
        history.push("/admin/login")
    }

    return (
        <div className={classes.drawerContainer}>
                <List>
                    {drawerItems?.map((item, index) => (
                        <SideBarItems key={index} item={item} index={index} />
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

export default SideBar;
