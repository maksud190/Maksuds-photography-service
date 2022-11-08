import React from 'react';
import AboutPhotography from '../AboutPhotography/AboutPhotography';
import Banner from '../Banner/Banner';
import MyJourney from '../MyJourney/MyJourney';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutPhotography></AboutPhotography>
            <MyJourney></MyJourney>
        </div>
    );
};

export default Home;