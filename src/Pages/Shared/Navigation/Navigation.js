// import React from "react";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
// const Navigation = () => {
//     const { user, logout } = useAuth();
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         Doctors Portal
//                     </Typography>
//                     <Link to="/appointment">
//                         <Button color="inherit">Appointment</Button>
//                     </Link>

//                     {
//                         user?.email ?

//                             <Button onClick={logout} color="inherit">Logout</Button>


//                             :
//                             <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
//                                 <Button color="inherit">Login</Button>

//                             </NavLink>
//                     }

//                     {/* <Button color="inherit">Login</Button> */}
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// };

// export default Navigation;


// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link, NavLink } from 'react-router-dom';
// import useAuth from './../../../hooks/useAuth';
// import MakeAdmin from '../../DashBoard/MakeAdmin/MakeAdmin';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Button } from '@mui/material';



import useAuth from './../../../hooks/useAuth';


import MakeAdmin from '../../DashBoard/MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import { red } from '@mui/material/colors';
const Navigation = () => {
    const { user, logout } = useAuth();
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    return (
        <Box sx={{ flexGrow: 1, color: 'red' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sarkar Car House
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white', marginLeft: '15' }} to="/home"><Button color="inherit">Home</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white', marginLeft: '15' }} to="/appointment"><Button color="inherit">Service</Button></NavLink>

                    <NavLink style={{ textDecoration: 'none', color: 'white', marginLeft: '15' }} to="/review"><Button color="inherit">
                        My Order </Button></NavLink>

                    {/* {admin && <Box>
                <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/addDoctor`}><Button color="inherit">Add Doctor</Button></Link>
            </Box>} */}

                    {admin &&
                        <NavLink style={{ textDecoration: 'none', color: 'white', marginLeft: '15' }} to="/users"> <Button color="inherit">Manage All Orders</Button></NavLink>
                    }
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>


                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;