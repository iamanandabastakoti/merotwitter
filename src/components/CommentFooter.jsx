import React, { useState } from 'react'
import {FaRegComment, FaRegHeart, FaHeart, FaRegChartBar} from 'react-icons/fa'
import { AiOutlineRetweet } from "react-icons/ai";
import {BsUpload} from 'react-icons/bs'

const CommentFooter = ({id}) => {

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
      <div className="footer-icons">
        <FaRegComment />
      </div>
      <div onClick={retweet} className="footer-icons">
        {isRetweeted ? <AiOutlineRetweet color='#00ba7c' /> : <AiOutlineRetweet /> } 
      </div>
      <div onClick={reactTweet} className="footer-icons">
        {isLiked ? <FaHeart color='red' /> : <FaRegHeart /> } 
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

export default CommentFooter