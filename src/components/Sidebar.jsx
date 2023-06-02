import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { BiHomeCircle, BiHash, BiBookmark, BiUser } from 'react-icons/bi'
import { GrNotification } from 'react-icons/gr'
import { FiMail } from 'react-icons/fi'
import { RiTodoLine } from 'react-icons/ri'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { CiCircleMore } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const Sidebar = () => {

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
                        <div className="sidebar-user-profile">
                            <img
                                className="sidebar-profile-pic"
                                src="https://avatars.githubusercontent.com/u/105543272?v=4"
                                alt="Profile Picture"
                            />
                            <div className="sidebar-usser-info">
                                <div className="sidebar-user-name">
                                    Ananda Bastakoti
                                </div>
                                <div className="sidebar-username">
                                    @iamanandabastakoti
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar