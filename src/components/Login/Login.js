import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { singInUsingGoogle } = useAuth();
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
                <button className='btn-regular' onClick={singInUsingGoogle}>Google Sing in</button>

            </div>
        </div>
    );
};

export default Login;