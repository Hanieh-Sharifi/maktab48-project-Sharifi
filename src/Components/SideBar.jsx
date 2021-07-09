import React from 'react';

// material ui components
import { List, ListItem, ListItemText, Divider, ListItemIcon} from "@material-ui/core";

// material ui icons
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InboxIcon from '@material-ui/icons/Inbox';

// material ui icons
import { useStyles } from '../Containers/admin-header-sidebar/sideBarHeaderStyle';

// route imports
import { useHistory, Link } from 'react-router-dom';


const drawerItems = [{ title: "کالا ها", icon: <InboxIcon /> }, { title: "موجودی و قیمت ها", icon: <AccountBalanceWalletIcon /> }, { title: "سفارش ها", icon: <ReceiptIcon /> }]
const links = ["/admin/manage/products","/admin/manage/prices","/admin/manage/orders"];

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
                        <Link to={links[index]} key={index} >
                            <ListItem button>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </Link>
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
