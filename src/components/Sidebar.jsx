import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { BiHomeCircle, BiHash, BiBookmark, BiUser } from 'react-icons/bi'
import { GrNotification } from 'react-icons/gr'
import { FiMail } from 'react-icons/fi'
import { RiTodoLine } from 'react-icons/ri'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { CiCircleMore } from 'react-icons/ci'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarLeft"></div>
            <div className="sidebarRight">
                <div className="options">
                    <div className="appIcon optionList">
                        <BsTwitter />
                    </div>
                    <div className="optionList">
                        <div className="icon"><BiHomeCircle /></div>
                        <div className="optionName">Home</div>
                    </div>
                    <div className="optionList">
                        <div className="icon"><BiHash /></div>
                        <div className="optionName">Explore</div>
                    </div>
                    <div className="optionList">
                        <div className="icon"><GrNotification /></div>
                        <div className="optionName">Notifications</div>
                    </div>
                    <div className="optionList">
                        <div className="icon"><FiMail /></div>
                        <div className="optionName">Messages</div>
                    </div>
                    <div className="optionList">
                        <div className="icon"><RiTodoLine /></div>
                        <div className="optionName">Lists</div>
                    </div>
                    <div className="optionList">
                        <div className="icon"><BiBookmark /></div>
                        <div className="optionName">Bookmarks</div>
                    </div>
                    <div className="optionList">
                        <div className="icon"><TiSocialTwitterCircular /></div>
                        <div className="optionName">Twitter Blue</div>
                    </div>
                    <div className="optionList">
                        <div className="icon"><BiUser /></div>
                        <div className="optionName">Profile</div>
                    </div>
                    <div className="optionList">
                        <div className="icon"><CiCircleMore /></div>
                        <div className="optionName">More</div>
                    </div>
                    <div className="optionList-button">
                            <button className="tweet-button">Tweet</button>
                    </div>
                    <div className="optionList">
                        User Profile
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar