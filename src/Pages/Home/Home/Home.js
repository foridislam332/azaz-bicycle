import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import FeaturedBikes from '../FeaturedBikes/FeaturedBikes/FeaturedBikes';
import Footer from '../Footer/Footer';
import LatestBikes from '../LatestBikes/LatestBikes';
import News from '../News/News';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <LatestBikes></LatestBikes>
            <FeaturedBikes></FeaturedBikes>
            <Reviews></Reviews>
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default Home;