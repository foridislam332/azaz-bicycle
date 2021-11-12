import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Banner = () => {
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/93j242r/banner-bg.jpg)', color: 'white', height: '100vh', backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="banner_area">
            <Container>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography sx={{ textAlign: 'left', color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', lineHeight: '1.5' }} variant="h4">
                                    Welcome to Our <br /> <span style={{ color: '#00d0ff' }}>Azaz  Bicycle</span> Online Shop
                                </Typography>
                                <Typography variant="body2" component="h2" sx={{ margin: '30px 0', fontFamily: 'Montserrat', color: '#bdbdbd' }}>
                                    Bikes, Mountain bikes, Road Bikes, MTB Bikes, Bike Parts, Frames, BMX bikes and many more from our cyclestore bikes ranges. We offer top cycle brands. A specialist cycling marketplace connecting buyers and sellers throughout the UK and Europe.
                                </Typography>
                                <Button className="btn_regular" variant="contained">Learn more</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Banner;