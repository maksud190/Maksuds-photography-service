import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import AboutPhotography from '../AboutPhotography/AboutPhotography';
import Banner from '../Banner/Banner';
import MyJourney from '../MyJourney/MyJourney';
import Services from '../Services/Services';

const Home = () => {

    const { loader } = useContext(AuthContext);

    if (loader) {
        return <button className="btn loading m-auto">loading...</button>;
    }

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutPhotography></AboutPhotography>
            <MyJourney></MyJourney>
            <div className='flex justify-center my-20'>
                <div className="radial-progress w-52 h-52 mr-10" style={{ "--value": 20 }}>work refusd: 20%</div>
                <div className="radial-progress w-52 h-52 mr-10" style={{ "--value": 80 }}>Response to client 80%</div>
                <div className="radial-progress w-52 h-52" style={{ "--value": 100 }}>Work done on time: 100%</div>

            </div>
        </div>
    );
};

export default Home;