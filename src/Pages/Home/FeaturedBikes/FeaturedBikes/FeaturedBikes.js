import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import FeaturedBike from '../FeaturedBike/FeaturedBike';

const FeaturedBikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://desolate-crag-02664.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <>
            <Container sx={{ pb: 6 }}>
                <Box sx={{ padding: '70px 0' }}>
                    <Typography variant="h3" sx={{ fontWeight: 'medium' }}>
                        Featured Bikes
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        {
                            bikes.slice(4, 12).map(bike => <FeaturedBike
                                key={bike._id}
                                bike={bike}
                            ></FeaturedBike>)
                        }
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default FeaturedBikes;