import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <Container>
            <Box>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ py: 5 }}>
                            <Box sx={{ width: '90px', margin: 'auto', mb: 4 }}>
                                <img style={{ borderRadius: '50%' }} src={user.photoURL} alt="" />
                            </Box>
                            <Box sx={{ margin: 'auto' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'medium', textAlign: 'center', fontFamily: 'Montserrat' }}>
                                    {user.displayName}
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'medium', textAlign: 'center', fontFamily: 'Montserrat' }}>
                                    {user.email}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}></Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default DashboardHome;