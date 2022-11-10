import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewsRowTable from './ReviewsRowTable';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);
    useTitle('My Reviews');


    useEffect(() => {
        fetch(`https://y-orcin-five.vercel.app/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this review?');
        if(proceed){
            fetch(`https://y-orcin-five.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Successfully Deleted')
                    const remaining = review.filter(re => re._id !== id);
                    setReview(remaining);
                }
            })
        }
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Service Title</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        review?.map(rw => <ReviewsRowTable
                            key={rw._id}
                            rw={rw}
                            handleDelete={handleDelete}
                        ></ReviewsRowTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;