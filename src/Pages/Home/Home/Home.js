import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Info></Info>
            <Products></Products>
            <Reviews></Reviews>
        </>
    );
};

export default Home;