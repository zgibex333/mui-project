import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {mainNavbarListItems} from "./consts/navbarListItems";
import {navbarStyles} from "./styles";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Drawer
            sx={navbarStyles.drawer}
            variant="permanent"
            anchor="left"
        >
            <Toolbar/>
            <Divider/>
            <List>
                {mainNavbarListItems.map((item) => (
                    <ListItem button key={item.id} onClick={()=>navigate(item.route)}>
                        <ListItemIcon sx={navbarStyles.icons}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} sx={navbarStyles.text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}