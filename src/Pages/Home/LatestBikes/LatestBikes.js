import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import LatestBike from '../LatestBike/LatestBike';

const LatestBikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('./bikes.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    console.log(bikes)
    return (
        <Container>
            <Box sx={{ padding: '70px 0' }}>
                <Typography variant="h2" sx={{ fontWeight: 'medium' }}>
                    Our Latest Bikes
                </Typography>
            </Box>
            <Box>
                <Grid container spacing={4}>
                    {
                        bikes.slice(0, 6).map(bike => <LatestBike
                            key={bike.id}
                            bike={bike}
                        ></LatestBike>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default LatestBikes;