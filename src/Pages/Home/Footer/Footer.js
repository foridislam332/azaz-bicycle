import { Container, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
    return (
        <Box sx={{ background: '#e0e0e0', color: "#212121", padding: '50px 0 0' }}>
            <Container>
                <Box sx={{ textAlign: 'left' }}>
                    <Grid container spacing={6}>
                        {/* Azaz Bicycle */}
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600' }} variant="h4">
                                Azaz Bicycle
                            </Typography>
                            <Typography sx={{ textAlign: 'left', mt: 3, px: 1, fontFamily: 'Montserrat', fontWeight: 'medium' }} variant="body2">
                                <Typography sx={{ display: 'inline' }} variant="h6">Azaz Bicycle</Typography> is the first and largest web portal about bicycle in Bangladesh.We have started our journey on 23rd August, 2013. We publish bike specifications, price, news, tips, reviews, showroom address and brand details etc.
                            </Typography>
                        </Grid>
                        {/* Customer Services */}
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600' }} variant="h4">
                                Customer Services
                            </Typography>
                            <Box>
                                <ul style={{ padding: '0 10px' }}>
                                    <li style={{ listStyle: 'none', marginBottom: '5px', cursor: 'pointer' }}>Help Pages</li>
                                    <li style={{ listStyle: 'none', marginBottom: '5px', cursor: 'pointer' }}>International Delivery</li>
                                    <li style={{ listStyle: 'none', marginBottom: '5px', cursor: 'pointer' }}>Payment Methods</li>
                                    <li style={{ listStyle: 'none', marginBottom: '5px', cursor: 'pointer' }}>Ordering and Canceling</li>
                                    <li style={{ listStyle: 'none', cursor: 'pointer' }}>Returns</li>
                                </ul>
                            </Box>
                        </Grid>
                        {/* contact area */}
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600' }} variant="h4">
                                Contact Us
                            </Typography>
                            <Box sx={{ textAlign: 'left', mt: 3, px: 1 }}>
                                <Typography sx={{ my: 2 }} variant="body2">
                                    1750 Chandra, Kaliakoir
                                    <br />
                                    Gazipur, Dhaka
                                </Typography>
                                <Typography variant="body2">
                                    Phone: 01944422200
                                    <br />
                                    Email: azaz.cycle @gmail.com
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <FacebookRoundedIcon />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <GoogleIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
            <Box sx={{ borderTop: '1px solid #424242', mt: 4, py: 3 }}>
                <Typography variant="body2">
                    Copyright © 2021 Azaz Bicycle
                </Typography>
            </Box>
        </Box >
    );
};

export default Footer;