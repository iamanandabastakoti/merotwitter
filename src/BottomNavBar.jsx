import React, { useState } from 'react'
import { BiHomeCircle, BiSearch, MdNotificationsNone, FiMail } from "react-icons/all";
import { Link } from 'react-router-dom';

const BottomNavBar = () => {

    const [option, setOption] = useState(1);
    const toggleOption = (index) => {
        setOption(index);
    }

    return (
        <div className="bottomNavBar">
            <div className="bottom-options">
                <Link to='/'>
                    <div onClick={() => toggleOption(1)} className={ option === 1 ? "bottom-optionList bottom-home active-bottom-option" : "bottom-optionList bottom-home"}>
                        <BiHomeCircle />
                    </div>
                </Link>
                <Link to='/explore'>
                    <div onClick={() => toggleOption(2)} className={ option === 2 ? "bottom-optionList bottom-home active-bottom-option" : "bottom-optionList bottom-home"}>
                        <BiSearch />
                    </div>
                </Link>
                <Link to='/notifications'>
                    <div onClick={() => toggleOption(3)} className={ option === 3 ? "bottom-optionList bottom-home active-bottom-option" : "bottom-optionList bottom-home"}>
                        <MdNotificationsNone />
                    </div>
                </Link>
                <Link to='/messages'>
                    <div onClick={() => toggleOption(4)} className={ option === 4 ? "bottom-optionList bottom-home active-bottom-option" : "bottom-optionList bottom-home"}>
                        <FiMail />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BottomNavBar