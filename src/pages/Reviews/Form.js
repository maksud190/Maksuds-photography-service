import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Form = () => {

    const { user, _id, title, loader } = useContext(AuthContext);

    

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const imgUrl = form.imgUrl.value;
        const review = form.review.value;
        if (loader) {
            return <button className="btn loading">loading...</button>;
        }
        console.log(email, name, imgUrl, review, _id, title);

        const reviewer = {
            service: _id,
            title,
            reviewer: name,
            email: email,
            imgUrl: imgUrl,
            review: review
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your Review have submitted Completely');
                    form.reset();
                }
            })
            .catch(error => console.error(error))


    }


    return (
        <div>
            <h1 className='text-center mb-10'>Please deliver your review here</h1>
            {
                user?.uid ?
                    <form onSubmit={handleReview} className='form-control'>
                        <div className='grid justify-items-center'>
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="Email" name='email' placeholder="You Email" defaultValue={user?.email} className="input input-bordered input-accent w-full max-w-3xl" readOnly />
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="You Name" className="input input-bordered input-accent w-full max-w-3xl" />
                            <label className="label">
                                <span className="label-text">Your Photo URL</span>
                            </label>
                            <input type="text" name='imgUrl' placeholder="Image URL" className="input input-bordered input-accent w-full max-w-3xl" />
                            <label className="label">
                                <span className="label-text">Please give some feedback</span>
                            </label>
                            <input type="text" name='review' placeholder="Review" className="input input-bordered input-accent w-full max-w-3xl" />
                        </div>
                        <button className='btn btn-outline mt-10 max-w-3xl m-auto' type='submit'>Submit my review</button>
                    </form>

                    :

                    <div className='text-center '>
                        <p className='mb-5'>Please Login and Review</p>
                        <Link to='/login'><button className='btn mb-10'>Login</button></Link>
                    </div>
            }
        </div>
    );
};

export default Form;