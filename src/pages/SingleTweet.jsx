import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Tweet from '../components/home/Tweet';
import axios from 'axios';
import CommentBox from '../components/CommentBox';
import { Triangle } from 'react-loader-spinner'

const SingleTweet = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [tweet, setTweet] = useState(null);
  const{id} = useParams();
  const fetchTweets = async () => {
    const resp = await axios.get("https://react-workshop-todo.fly.dev/posts/" + id, {
      headers: {
        apiKey: `${import.meta.env.VITE_API_KEY}`
      }
    });
    setTweet(resp.data.post);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchTweets();
  }, [])

  return (
    <>
    {isLoading ? 
      <div className="loading-triangle-singletweet">
        <Triangle
          height="80"
          width="80"
          color="#1d9bf0"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
          /> 
      </div>
      : null
      }
    {
      tweet ? <Tweet avatar={'https://avatars.githubusercontent.com/u/' + tweet.user.githubId + '?v=4'} name={tweet.user.fullname} username={'@' + tweet.user.name} tweet={tweet.content} image={tweet.image} key={tweet._id} /> : null
    }

    <CommentBox id={id} />
    </>
  )
}

export default SingleTweet