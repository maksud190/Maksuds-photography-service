import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AboutPhotography from '../AboutPhotography/AboutPhotography';
import Banner from '../Banner/Banner';
import MyJourney from '../MyJourney/MyJourney';
import Services from '../Services/Services';

const Home = () => {

    const { loading } = useContext(AuthContext);
    useTitle('Home');

    if(loading){
        return <div className='text-center my-16'><button className="btn loading">loading</button></div>;
    }

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