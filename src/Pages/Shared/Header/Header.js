import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as NavLink } from "react-router-dom";
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                        A.zaz Bicycle
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/bike"><Button color="inherit">Bikes</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
                    {
                        user?.email ? <Button variant="contained" onClick={logOut}>LogOut</Button> : <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;