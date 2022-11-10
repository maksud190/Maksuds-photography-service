import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AllReviews from '../../Reviews/AllReviews';
import Form from '../../Reviews/Form';

const ServiceDetail = () => {

    const serviceDetail = useLoaderData();
    const { user, _id, title } = useContext(AuthContext);
    useTitle('Service Detail');

    // const { title, img, description, _id } = service;

   

    return (
        <div>
            <div className="my-20 card lg:card-side bg-base-100 shadow-xl m-auto">
                <figure><img src={serviceDetail?.img} alt="Album" /></figure>
                <div className="card-body w-full">
                    <h2 className="card-title">{serviceDetail?.title}</h2>
                    <p>{serviceDetail?.description}</p>
                    <p className='text-2xl font-bold'>Price: $ <span className='text-yellow-400'>{serviceDetail?.price}</span></p>
                    
                </div>
            </div>
            <div className='mb-10'>
                <Form></Form>
            </div>
            <div>
                <AllReviews></AllReviews>
            </div>
            
        </div>
    );
};

export default ServiceDetail;