import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PaymentIcon from '@mui/icons-material/Payment';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Button } from '@mui/material';
import Home from '../../Home/Home/Home';
import useAuth from '../../../hooks/useAuth';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import AddNewBike from '../AddNewBike/AddNewBike';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Reviews from '../../Home/Reviews/Reviews';
import AddReviews from '../AddReviews/AddReviews';
import DashboardHome from '../DashboardHome/DashboardHome';
import ReviewsIcon from '@mui/icons-material/Reviews';

const drawerWidth = 240;


function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const { logOut, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Toolbar />
            <Divider />
            <NavLink className="dash_btn" to={`${url}`}><DashboardIcon sx={{ color: 'white' }} /><Button sx={{ textAlign: 'left', display: 'block', color: 'white' }} > Dashboard</Button></NavLink>

            <NavLink className="dash_btn" to="/Home"><HomeIcon sx={{ color: 'white' }} /><Button sx={{ textAlign: 'left', display: 'block', color: 'white' }}> Home</Button></NavLink>

            <NavLink className="dash_btn" to="/bike"><DirectionsBikeIcon sx={{ color: 'white' }} /><Button sx={{ textAlign: 'left', display: 'block', color: 'white' }}>Bikes</Button></NavLink>

            <NavLink className="dash_btn" to={`${path}/pay`}><PaymentIcon sx={{ color: 'white' }} /><Button sx={{ textAlign: 'left', display: 'block', color: 'white' }}>Pay</Button></NavLink>

            <NavLink className="dash_btn" to={`${path}/myorder`}><ProductionQuantityLimitsIcon sx={{ color: 'white' }} /><Button sx={{ textAlign: 'left', display: 'block', color: 'white' }}>My Orders</Button></NavLink>

            <NavLink className="dash_btn" to={`${path}/reviews`}><ReviewsIcon sx={{ color: 'white' }} /><Button sx={{ textAlign: 'left', display: 'block', color: 'white' }}>Reviews</Button></NavLink>

            {
                admin && <>
                    <NavLink className="dash_btn" to={`${path}/makeAdmin`}><AdminPanelSettingsIcon sx={{ color: 'white' }} /><Button sx={{ textAlign: 'left', display: 'block', color: 'white' }}>Make Admin</Button></NavLink>

                    <NavLink className="dash_btn" to={`${path}/addbike`}><AddBusinessIcon sx={{ color: 'white' }} /><Button sx={{ textAlign: 'left', display: 'block', color: 'white' }}>Add Bike</Button></NavLink>

                    <NavLink className="dash_btn" to={`${path}/manage-orders`}><SettingsIcon sx={{ color: 'white' }} /><Button sx={{ textAlign: 'left', display: 'block', color: 'white' }}>Manage All Orders</Button></NavLink>

                    <NavLink className="dash_btn" to={`${path}/manage-products`}><ManageSearchIcon sx={{ color: 'white' }} /><Button sx={{ textAlign: 'left', display: 'block', color: 'white' }}>Manage Products</Button></NavLink>
                </>
            }

            <Button className="dash_btn" sx={{ color: '#ffffff', mt: 1, background: 'red', borderRadius: 0 }} variant="contained" onClick={logOut}>LogOut</Button>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <AddReviews></AddReviews>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addbike`}>
                        <AddNewBike></AddNewBike>
                    </Route>
                    <Route path={`${path}/manage-orders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manage-products`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
