import React, { useEffect, useState } from 'react'
import './Pages.css'
import { BsTwitter } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LogIn = ({ setLoggedIn, setUserApi }) => {

    { document.title = 'LogIn to MeroTwitter' }
    var count = 0;
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [apiKeys, setApiKeys] = useState([]);

    const fetchTweets = async () => {
        const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all?limit=100", {
            headers: {
                apiKey: `${import.meta.env.VITE_API_KEY}`
            }
        });
        setUsers(posts.data);
    };

    useEffect(() => {
        fetchTweets();
    }, [])

    users.map(({ user }) => {
        apiKeys.push(user._id);
    });

    for (var i = 0; i < apiKeys.length - 1; i++) {
        if (password == apiKeys[i]) {
            count++;
        }
    }

    const checkAPIKey = () => {
        if ( password === `${import.meta.env.VITE_ADMIN_PASS}`) {
            setLoggedIn((v) => !v)
            setUserApi((v) => `${import.meta.env.VITE_API_KEY}`)
        } else {
            if (count > 0) {
                setLoggedIn((v) => !v)
                setUserApi((v) => password)
            } else if (count < 0) {
                alert('Please Enter the API Key')
            } else {
                alert('Wrong API Key');
            }
        }
    }


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
                    <input className='apikey-input' type="text" placeholder='Enter Your API Key' required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="login-button">
                    <button onClick={checkAPIKey} className="login">Log In</button>
                </div>
                <div className="no-account">
                    <p>Don't have an account? <a className='sign-up' href="https://react-workshop-todo.fly.dev/auth/github" target='_blank' >Sign Up</a> </p>
                </div>
            </div>
        </div>
    )
}

export default LogIn