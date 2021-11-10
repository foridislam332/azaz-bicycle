import { Button } from '@mui/material';
import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1>Home Comming</h1>
            <Button variant="contained">Contained</Button>
        </div>
    );
};

export default Home;