import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllReviewTable from './AllReviewTable';

const AllReviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

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
                        reviews?.map(rev => <AllReviewTable
                            key={rev._id}
                            rev={rev}

                        ></AllReviewTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllReviews;