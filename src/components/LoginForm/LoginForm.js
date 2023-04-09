import React from 'react'
import "./LoginForm.css"
import Card from '../Card/Card';
import Profile from './Profile.png'

const LoginForm = () => {
  return <Card>
    <img src={Profile} className='title'></img>
    <p className='subtitle'>Please log in using your password and username</p>
    <form>
        <div className='input_container'>
            <input type='text' placeholder='Username'/>
            <input type='password' placeholder='Password'/>
        </div>
        <input type='submit' value='Log In' className='login_button'/>
    </form>
    <div className='link_container'>
        <a href='' className='small'>
            Forgot Password?
        </a>
    </div>
  </Card>
};

export default LoginForm;
