import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                        A.zaz Bicycle
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/cycles"><Button color="inherit">Cycles</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about"><Button color="inherit">About</Button></NavLink>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;