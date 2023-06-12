import React from 'react'
import './Pages.css'
import { BsTwitter } from 'react-icons/bs'

const LogIn = () => {

    { document.title = 'LogIn to MeroTwitter' }

    return (
        <div className="log-in">
            <div className="login-container">
                <div className="merotwitter-logo">
                    <BsTwitter />
                </div>
                <div className="sigin-twitter">
                    <h3>Sign in to MeroTwitter</h3>
                </div>
                <div className="login-apikey-input">
                    <input className='apikey-input' type="text" placeholder='Enter Your API Key' />
                </div>
                <div className="login-button">
                    <button className="login">Log In</button>
                </div>
                <div className="no-account">
                    <p>Don't have an account? <a className='sign-up' href="https://react-workshop-todo.fly.dev/auth/github" target='_blank' >Sign Up</a> </p>
                </div>
            </div>
        </div>
    )
}

export default LogIn