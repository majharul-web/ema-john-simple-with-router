import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create Account</h2>
                <form>
                    <input type="email" placeholder='email' />
                    <br />
                    <input type="password" placeholder='password' />
                    <br />
                    <input type="password" placeholder='re-enter password' />
                    <br />
                    <input type="submit" value='Submit' />
                </form>
                <p>Already hav an Account? <Link to='login'>Login</Link></p>
                <div>----------or----------</div>
                <button className='btn-regular'>Google Sing in</button>

            </div>
        </div>
    );
};

export default Register;