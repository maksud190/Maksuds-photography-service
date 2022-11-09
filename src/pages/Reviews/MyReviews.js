import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewsRowTable from './ReviewsRowTable';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

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

                        ></ReviewsRowTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;