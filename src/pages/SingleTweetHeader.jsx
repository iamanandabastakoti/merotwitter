import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const SingleTweetHeader = () => {

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate(`/`);
    }


    return (
        <div onClick={navigateToHome} className="single-tweet-header">
            <div className="single-tweet-header-icon">
                <BiArrowBack />
            </div>
            <div className="single-tweet-title">
                Tweet
            </div>
        </div>
    )
}

export default SingleTweetHeader