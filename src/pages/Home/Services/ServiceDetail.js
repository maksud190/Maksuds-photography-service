import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceDetail = () => {

    const serviceDetail = useLoaderData();
    const { user } = useContext(AuthContext);

    // const { title, img, description, _id } = service;

    return (
        <div className="my-20 card lg:card-side bg-base-100 shadow-xl m-auto">
            <figure><img src={serviceDetail?.img} alt="Album" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title">{serviceDetail?.title}</h2>
                <p>{serviceDetail?.description}</p>
                <p className='text-2xl font-bold'>Price: $ <span className='text-yellow-400'>{serviceDetail?.price}</span></p>
                {/* {
                    serviceDetail?.description.length > 100 ?
                        <p>{serviceDetail?.description.slice(0, 100) + '...'} <Link className='underline text-blue-500' to={`/services/${serviceDetail?._id}`}>Learn More</Link></p>
                        :
                        <p>{serviceDetail?.description}</p>
                } */}
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div> */}
                {
                    user?.uid ?
                        <div>
                            
                        </div>

                        :

                        <div>

                        </div>
                }

            </div>
        </div>
    );
};

export default ServiceDetail;