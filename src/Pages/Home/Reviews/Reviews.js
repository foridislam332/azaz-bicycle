import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://desolate-crag-02664.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <Container>
            <Typography sx={{ mt: 7, mb: 5, fontFamily: 'Montserrat', fontWeight: 'bold' }} variant="h4">
                Reviews
            </Typography>
            <Box>
                <Grid container spacing={4}>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Reviews;