import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ServiceCard from './ServiceCard';

const AllServices = () => {

    const {loading} = useContext(AuthContext);
    const [allServices, setAllServices] = useState();
    useEffect(() => {
        fetch('https://y-orcin-five.vercel.app/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    if(loading){
        if(loading){
            return <div className='text-center my-16'><button className="btn loading">loading</button></div>;
        }
    }

    return (
        <div className='my-24'>
            <h1 className='text-2xl font-bold text-center'>My Services</h1>
            <div>
                {
                    allServices?.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;