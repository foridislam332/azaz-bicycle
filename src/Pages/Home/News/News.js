import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleNews from '../SingleNews/SingleNews';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('./news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <Container>
            <Box sx={{ py: 10 }}>
                <Typography sx={{ mt: 2, mb: 5, fontFamily: 'Montserrat', fontWeight: 'bold' }} variant="h4">
                    Latest News
                </Typography>
                <Grid container spacing={4}>
                    {
                        news.map(singleNews => <SingleNews
                            key={singleNews.id}
                            singleNews={singleNews}
                        ></SingleNews>)
                    }
                </Grid>
                <Button sx={{ mt: 5 }} className='btn_regular'>See More...</Button>
            </Box>
        </Container>
    );
};

export default News;