import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BiHomeCircle, BiSearch, MdNotificationsNone, FiMail } from "react-icons/all";
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner'

const BottomNavBar = ({ userApi }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [profilePicture, setProfilePicture] = useState([]);
    const [users, setUsers] = useState([]);
    const fetchUser = async () => {
        const profile = await axios.get(`https://react-workshop-todo.fly.dev/posts/profile/${userApi}`, {
            headers: {
                apiKey: `${userApi}`
            }
        });
        setUsers(profile.data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchUser();
    }, []);

    users.map(({ user }) => {
        profilePicture.push('https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4');
    })

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
                <Link to={`/profile/${userApi}`}>
                    <div onClick={() => toggleOption(5)} className={ option === 5 ? "bottom-optionList bottom-profile active-bottom-profile" : "bottom-optionList bottom-profile"}>
                        {
                            isLoading ?
                            <TailSpin
                            height="48"
                            width="48"
                            color="#1d9bf0"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                          />
                            :
                        <img src={profilePicture[0]} alt="Profile Picture" />
                        }
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