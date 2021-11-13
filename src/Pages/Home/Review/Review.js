import { Grid, Typography } from '@mui/material';
import React from 'react';

const Review = ({ review }) => {
    const { displayName, img, email } = review;
    return (
        <Grid item xs={12} md={4}>
            <Typography variant="5">
                name: {displayName}
            </Typography>
        </Grid>
    );
};

export default Review;