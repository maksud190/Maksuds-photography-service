import React from 'react';

const ServiceCard = ({service}) => {

    const {title, img, description} = service;

    return (
        <div className="mt-12 card lg:card-side bg-base-100 shadow-xl lg:w-7/12 lg:h-52 m-auto">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title">{title}</h2>
                <p>slice({description})</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;