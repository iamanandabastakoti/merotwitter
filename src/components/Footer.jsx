import React from 'react'
import {FaRegComment, FaRetweet, FaRegHeart, FaRegChartBar} from 'react-icons/fa'
import {BsUpload} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FaRegComment />
      </div>
      <div className="footer-icons">
        <FaRetweet />
      </div>
      <div className="footer-icons">
        <FaRegHeart />
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