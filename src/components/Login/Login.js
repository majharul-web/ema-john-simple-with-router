import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { singInUsingGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/shop';


    const handleGoogleSingIn = () => {
        singInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            });
    }
    return (
        <div className='login-form'>
            <div>
                <form>

                    <input type="email" placeholder='Email' />
                    <br />
                    <input type="password" placeholder='Password' />
                    <br />
                    <input type="submit" value="Login" />
                </form>
                <p>New to ema-john <Link to='/register'>Create Account</Link></p>
                <div>----------or----------</div>
                <button className='btn-regular' onClick={handleGoogleSingIn}>Google Sing in</button>

            </div>
        </div>
    );
};

export default Login;