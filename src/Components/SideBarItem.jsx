import React from 'react';

import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

import {Link} from "react-router-dom";


// addresses for pushing history
const links = ["/admin/panel", "/admin/manage/products", "/admin/manage/prices", "/admin/manage/orders"];

function SideBarItem({item, index}) {
    return (
        <Link to={links[index]} key={index} >
            <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
            </ListItem>
        </Link>
    )
}

export default SideBarItem;
