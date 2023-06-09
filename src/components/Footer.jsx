import React, { useState } from 'react'
import {FaRegComment, FaRegHeart, FaHeart, FaRegChartBar} from 'react-icons/fa'
import { AiOutlineRetweet } from "react-icons/ai";
import {BsUpload} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Footer = ({id}) => {

  const navigate = useNavigate();
  const navigateToTweet = () => {
    navigate(`/tweet/${id}`);
  }

  const [isRetweeted, setIsRetweeted] = useState(false);
  const retweet = () => {
    setIsRetweeted((v) => !isRetweeted);
  }

  const [isLiked, setIsLiked] = useState(false);
  const reactTweet = () =>{
    setIsLiked((v) => !isLiked);
  }
  return (
    <div className="footer">
      <div onClick={navigateToTweet} className="footer-icons footer-comment">
        <FaRegComment />
      </div>
      <div onClick={retweet} className="footer-icons footer-retweet">
        {isRetweeted ? <AiOutlineRetweet color='#00ba7c' /> : <AiOutlineRetweet /> } 
      </div>
      <div onClick={reactTweet} className="footer-icons footer-react">
        {isLiked ? <FaHeart color='#f91880' /> : <FaRegHeart /> } 
      </div>
      <div className="footer-icons footer-interactions">
        <FaRegChartBar />
      </div>
      <div className="footer-icons footer-share">
        <BsUpload />
      </div>
    </div>
  )
}

export default Footer