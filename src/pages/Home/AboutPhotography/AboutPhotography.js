import React from 'react';
import image from '../../../images/other-sections/about.jpg'

const AboutPhotography = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-auto'>
                    <h1 className="text-5xl font-bold">About Photography</h1>
                    <p className="py-6">Photography is the art of capturing and processing light using a sensor or film. But the essence of photography is to treasure moments and share them with the world. <br /> Quite simple, but the action itself is capable of changing people's perceptions.A photo can have a deeper meaning and tell thousands of important stories. One of the best examples is photos taken during the war.There are many eye-opening photos circulated during the war.Some photos snap the winners' glorious moments while others show the utter devastation of citizens caught in the crossfire. <br /> But that's not all, folks; photography also has the nature of having multiple interpretations, especially in modern photography and art.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutPhotography;