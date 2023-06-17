import React from 'react'
import { BiHomeCircle, BiSearch, GrNotification, FiMail } from "react-icons/all";
import { Link } from 'react-router-dom';

const BottomNavBar = () => {
    return (
        <div className="bottomNavBar">
            <div className="bottom-options">
                <Link to='/'>
                    <div className="bottom-optionList bottom-home">
                        <BiHomeCircle />
                    </div>
                </Link>
                <Link to='/explore'>
                    <div className="bottom-optionList bottom-search">
                        <BiSearch />
                    </div>
                </Link>
                <Link to='/notifications'>
                    <div className="bottom-optionList bottom-notification">
                        <GrNotification />
                    </div>
                </Link>
                <Link to='/messages'>
                    <div className="bottom-optionList bottom-message">
                        <FiMail />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BottomNavBar