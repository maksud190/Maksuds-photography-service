import React from 'react';

const AllReviewTable = ({rev}) => {

    const {email, reviewer, imgUrl, review} = rev;

    return (
        <tr>
            <th>
                <button className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imgUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{reviewer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
            </td>
            <th>
                {review}
            </th>
            <th>
                <button className='btn btn-ghost'>Edit Review</button>
            </th>
        </tr>
    );
};

export default AllReviewTable;