import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const LatestBike = ({ bike }) => {
    const { name, description, img, price } = bike;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={16} sx={{ padding: 4 }}>
                <img style={{ width: '100%' }} src={img} alt="" />
                <Typography sx={{ textAlign: 'left', color: '#5e5e5e', fontFamily: 'Montserrat' }} variant="h6">
                    {name}
                </Typography>
                <Typography sx={{ textAlign: 'left', my: 1 }} variant="body2">
                    {description.slice(0, 110)}...
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ textAlign: 'left', fontWeight: 'medium' }} variant="h5">
                        Price: <span style={{ color: 'red' }}>${price}</span>
                    </Typography>
                    <Button variant="contained">Buy Now</Button>
                </Box>
            </Paper>
        </Grid>
    );
};

export default LatestBike;