import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth, AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Registration = () => {

    const {createUser} = useContext(AuthContext);
    useTitle('Register')

    const handleRegister = (event)=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            updateUserName(name);
        })
        .catch(error => console.error(error))
    }

    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(()=> {
            console.log('displayName Updated');
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="hero my-28">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                    <h1 className='text-3xl font-bold text-center mt-5'>Please Login</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn" type="submit" value='Register' />
                        </div>
                    </form>
                    <p className='text-center mb-5'><Link className='underline text-blue-700' to='/login'>Already have an Account?</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;