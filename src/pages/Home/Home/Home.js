import React from 'react';
import AboutPhotography from '../AboutPhotography/AboutPhotography';
import Banner from '../Banner/Banner';
import MyJourney from '../MyJourney/MyJourney';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutPhotography></AboutPhotography>
            <MyJourney></MyJourney>
        </div>
    );
};

export default Home;