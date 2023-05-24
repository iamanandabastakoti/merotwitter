import React, { useState } from 'react'
import {FaRegComment, FaRetweet, FaRegHeart, FaHeart, FaRegChartBar} from 'react-icons/fa'
import {BsUpload} from 'react-icons/bs'

const Footer = () => {
  const [isLiked, setIsLiked] = useState(false);
  const reactTweet = () =>{
    setIsLiked((v) => !isLiked);
  }
  return (
    <div className="footer">
      <div className="footer-icons">
        <FaRegComment />
      </div>
      <div className="footer-icons">
        <FaRetweet />
      </div>
      <div onClick={reactTweet} className="footer-icons">
        {isLiked ? <FaHeart /> : <FaRegHeart /> } 
      </div>
      <div className="footer-icons">
        <FaRegChartBar />
      </div>
      <div className="footer-icons">
        <BsUpload />
      </div>
    </div>
  )
}

export default Footer