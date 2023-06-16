import React from 'react'
import { BiHomeCircle, BiSearch, GrNotification, FiMail } from "react-icons/all";
import { Link } from 'react-router-dom';

const BottomNavBar = () => {
    return (
        <div className="bottomNavBar">
            <div className="bottom-options">
                <Link to='/'>
                    <div className="bottom-optionList">
                        <BiHomeCircle />
                    </div>
                </Link>
                <Link to='/explore'>
                    <div className="bottom-optionList">
                        <BiSearch />
                    </div>
                </Link>
                <Link to='/notifications'>
                    <div className="bottom-optionList">
                        <GrNotification />
                    </div>
                </Link>
                <Link to='/messages'>
                    <div className="bottom-optionList">
                        <FiMail />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BottomNavBar