import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddService = () => {

    const { user, loading } = useContext(AuthContext);

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.imgUrl.value;
        const description = form.description.value;
        const price = form.price.value;
        if (loading) {
            return <div className='text-center my-16'><button className="btn loading">loading</button></div>;
        }
        console.log(title, img, description, price);

        const service = {
            title,
            img,
            description,
            price
        }

        fetch('https://y-orcin-five.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
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
        <h1 className='text-center text-2xl font-bold my-10'>To add any service, fill up the form please</h1>

        <form onSubmit={handleAddService} className='form-control'>
            <div className='grid justify-items-center'>
                <label className="label">
                    <span className="label-text">Title of your Service</span>
                </label>
                <input type="text" name='title' placeholder="Title" className="input input-bordered input-accent w-full max-w-3xl" required />
                <label className="label">
                    <span className="label-text">Image URL</span>
                </label>
                <input type="text" name='imgUrl' placeholder="Image URL" className="input input-bordered input-accent w-full max-w-3xl" required />
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input type="text" name='description' placeholder="description" className="input input-bordered input-accent w-full max-w-3xl" required />
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' placeholder="price" className="input input-bordered input-accent w-full max-w-3xl" required />
            </div>
            <button className='btn btn-outline my-10 max-w-3xl m-auto' type='submit'>Submit my review</button>
        </form>

    </div>

    // title,img,price,description 
);
};

export default AddService;