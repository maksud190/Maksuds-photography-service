import React from 'react';
import './Banner.css';
import Image1 from '../../../images/banner/IMG_1.jpg'
import Image2 from '../../../images/banner/IMG_2.jpg'
import Image3 from '../../../images/banner/IMG_3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='slider-image'>
                    <img src={Image1} alt='' className="w-full" />
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-1/3 right-1/3 top-1/2">
                    <h1 className='text-gray-200 text-4xl font-bold'>Welcome to Maksud's Photography</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='slider-image'>
                    <img src={Image2} alt='' className="w-full" />
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-1/3 right-1/3 top-1/2">
                    <h1 className='text-gray-200 text-4xl font-bold'>Welcome to Maksud's Photography</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='slider-image'>
                    <img src={Image3} alt='' className="w-full" />
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-1/3 right-1/3 top-1/2">
                    <h1 className='text-gray-200 text-4xl font-bold'>Welcome to Maksud's Photography</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;