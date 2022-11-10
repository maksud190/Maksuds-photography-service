import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    const {login, googleLogin, loading} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    useTitle('Login');


    if(loading){
        return <div className='text-center my-16'><button className="btn loading">loading</button></div>;
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        
        login(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            form.reset();

            const currentUser = {
                email: user.email
            }
            console.log(currentUser);

            fetch('https://y-orcin-five.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                localStorage.setItem('token', data.token);
            })

            navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    }

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="hero my-28">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                    <h1 className='text-3xl font-bold text-center mt-5'>Please Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn" type="submit" value='Login' />
                        </div>

                    </form>
                    <p className='text-center mb-2'>---Or login with---</p>
                    <button className='btn' onClick={handleGoogleLogin}>Google</button>
                    <br />
                    <p className='text-center mb-5'>Do not have account? <Link className='underline text-blue-700' to='/register'>Create new</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;