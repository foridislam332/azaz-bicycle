import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LatestBike from '../LatestBike/LatestBike';

const LatestBikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://desolate-crag-02664.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <Box sx={{ background: '#58cbf7', pb: 10 }}>
            <Container>
                <Box sx={{ padding: '70px 0' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>
                        Our Latest Bikes
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={6}>
                        {
                            bikes.slice(0, 6).map(bike => <LatestBike
                                key={bike.id}
                                bike={bike}
                            ></LatestBike>)
                        }
                    </Grid>
                    <NavLink style={{ textDecoration: 'none' }} to="/bike"><Button sx={{ mt: 8 }} className="btn_regular" >More Bikes</Button></NavLink>
                </Box>
            </Container>
        </Box>
    );
};

export default LatestBikes;