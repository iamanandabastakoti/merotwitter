import React from 'react'
import { BiArrowBack } from "react-icons/bi";

const SingleTweetHeader = () => {
    return (
        <div className="single-tweet-header">
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