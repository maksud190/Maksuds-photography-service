import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllServices = () => {

    const [allServices, setAllServices] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    return (
        <div className='mt-24'>
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