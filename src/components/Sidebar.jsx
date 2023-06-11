import React, { useEffect, useState } from 'react'
import { BsTwitter } from 'react-icons/bs'
import { BiHomeCircle, BiHash, BiBookmark, BiUser } from 'react-icons/bi'
import { GrNotification } from 'react-icons/gr'
import { FiMail } from 'react-icons/fi'
import { RiTodoLine } from 'react-icons/ri'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { CiCircleMore } from 'react-icons/ci'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Triangle } from 'react-loader-spinner'

const Sidebar = () => {
    const [fullName, setFullName] = useState([]);
    const [username, setUsername] = useState([]);
    const [profilePicture, setProfilePicture] = useState([]);
    const [userId, setUserId] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [users, setUsers] = useState([]);
    const fetchUser = async () => {
        const profile = await axios.get(`https://react-workshop-todo.fly.dev/posts/profile/${import.meta.env.VITE_API_KEY}`, {
            headers: {
                apiKey: `${import.meta.env.VITE_API_KEY}`
            }
        });
        setUsers(profile.data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchUser();
    }, []);

    users.map(({ user }) => {
        fullName.push(user.fullname);
        username.push(user.name);
        profilePicture.push('https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4');
        userId.push(user._id);
    })

    const navigate = useNavigate();
    const navigateToProfile = () => {
        navigate(`/profile/${userId[0]}`)
    }

    return (
        <div className="sidebar">
            <div className="sidebarLeft"></div>
            <div className="sidebarRight">
                <div className="options">
                    <div className="appIcon optionList">
                        <BsTwitter />
                    </div>
                    <Link to='/'>
                        <div className="optionList">
                            <div className="icon"><BiHomeCircle /></div>
                            <div className="optionName">Home</div>
                        </div>
                    </Link>
                    <Link to='/explore'>
                        <div className="optionList">
                            <div className="icon"><BiHash /></div>
                            <div className="optionName">Explore</div>
                        </div>
                    </Link>
                    <Link to='/notifications'>
                        <div className="optionList">
                            <div className="icon"><GrNotification /></div>
                            <div className="optionName">Notifications</div>
                        </div>
                    </Link>
                    <Link to='/messages'>
                        <div className="optionList">
                            <div className="icon"><FiMail /></div>
                            <div className="optionName">Messages</div>
                        </div>
                    </Link>
                    <Link to='/lists'>
                        <div className="optionList">
                            <div className="icon"><RiTodoLine /></div>
                            <div className="optionName">Lists</div>
                        </div>
                    </Link>
                    <Link to='/bookmarks'>
                        <div className="optionList">
                            <div className="icon"><BiBookmark /></div>
                            <div className="optionName">Bookmarks</div>
                        </div>
                    </Link>
                    <Link to='/twitter-blue'>
                        <div className="optionList">
                            <div className="icon"><TiSocialTwitterCircular /></div>
                            <div className="optionName">Twitter Blue</div>
                        </div>
                    </Link>
                    <Link>
                        <div className="optionList">
                            <div className="icon"><BiUser /></div>
                            <div className="optionName">Profile</div>
                        </div>
                    </Link>
                    <Link>
                        <div className="optionList">
                            <div className="icon"><CiCircleMore /></div>
                            <div className="optionName">More</div>
                        </div>
                    </Link>
                    <div className="optionList-button">
                        <button className="tweet-button">Tweet</button>
                    </div>
                    <div className="optionList">
                        {
                            isLoading ?
                                <Triangle
                                    height="50"
                                    width="50"
                                    color="#1d9bf0"
                                    ariaLabel="triangle-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />
                                :
                                <div onClick={navigateToProfile} className="sidebar-user-profile">
                                    <img
                                        className="sidebar-profile-pic"
                                        src={profilePicture[0]}
                                        alt="Profile Picture"
                                    />
                                    <div className="sidebar-usser-info">
                                        <div className="sidebar-user-name">
                                            {fullName[0]}
                                        </div>
                                        <div className="sidebar-username">
                                            {`@` + username[0]}
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar