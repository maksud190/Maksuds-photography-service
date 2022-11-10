import React from 'react';
import image from '../../../images/other-sections/journey.jpg'

const MyJourney = () => {
    return (
        <div className="hero bg-base-200 mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">My Photography Journey</h1>
                    <p className="py-6">My photography journey was like an adventure, I fell in love with this passion when I was 10 years old when my mom brought a camera with the roll and I took so ugly and blurry pictures but I still have them in an album. In the beginning, I didn’t know all the stuff like the technique, the exposer or the iso and I have never taken a course but I’ve always tried to document things on my own though I’ve seen that it’s not enough. I’ve learned that there are a lot of rules to follow for taking good pictures but I also learned that beautiful photos come from passion, from one’s commitment to being able to bring something special and unique through a shot.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default MyJourney;