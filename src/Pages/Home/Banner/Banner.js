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
                                <Typography variant="h3" component="h2">
                                    Welcome to Azaz  Bicycle
                                </Typography>
                                <Typography variant="body2" component="h2" sx={{ margin: '20px 0' }}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos cupiditate autem minus, fugit aliquam ipsum dolorem itaque asperiores distinctio laborum.
                                </Typography>
                                <Button variant="contained">Learn more</Button>
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