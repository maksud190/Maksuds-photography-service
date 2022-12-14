import 'react-photo-view/dist/react-photo-view.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {

    const { title, img, description, _id } = service;

    return (
        <div className="mt-12 card lg:card-side bg-base-100 shadow-xl lg:w-7/12 lg:h-52 m-auto">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="Album" />
                    </PhotoView>
                </PhotoProvider>


            </figure>
            <div className="card-body w-full">
                <h2 className="card-title">{title}</h2>
                {
                    description.length > 100 ?
                        <p>{description.slice(0, 100) + '...'} <Link className='underline text-blue-500' to={`/services/${_id}`}>Learn More</Link></p>
                        :
                        <p>{description}</p>
                }
            </div>
        </div>
    );
};

export default ServiceCard;