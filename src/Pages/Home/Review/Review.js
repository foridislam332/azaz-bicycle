import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Review = ({ review }) => {
    const { displayName, img, email, description } = review;
    return (
        <Grid sx={{ height: '400px' }} item xs={12} md={4}>
            <Box className="box_container">
                <Paper className="box_design" elevation={0} sx={{ p: 3, mb: 4 }}>
                    <Typography sx={{ fontFamily: 'Montserrat', color: '#808080', fontWeight: '400' }} variant="body2">
                        {description}
                    </Typography>
                    <Typography sx={{ fontSize: '16px', fontFamily: 'Montserrat', mt: 1, fontWeight: '600', color: '#d90746' }} variant="h6">
                        {email}
                    </Typography>
                </Paper>
                <Box className="person_box" sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
                    <img style={{ borderRadius: '50%', width: '70px' }} src={img} />
                    <Box>
                        <Typography sx={{ ml: 3, fontFamily: 'Montserrat', fontWeight: '600', color: '#d90746' }} variant="h5">
                            {displayName}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default Review;