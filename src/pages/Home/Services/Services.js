import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ServiceCard from './ServiceCard';

const Services = () => {

    const { loading } = useContext(AuthContext);
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    if(loading){
        return <div className='text-center my-16'><button className="btn loading">loading</button></div>;
    }

    return (
        <div className='mt-24'>
            <h1 className='text-2xl font-bold text-center'>My Services</h1>
            <div>
                {
                    services?.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-16'>
                <Link className='btn btn-info text-white' to='/allServices'>See All</Link>
            </div>

        </div>
    );
};

export default Services;