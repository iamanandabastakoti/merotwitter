import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Tweet from '../components/home/Tweet';
import axios from 'axios';

const SingleTweet = () => {

  const [tweet, setTweet] = useState(null);
  const{id} = useParams();
  const fetchTweets = async () => {
    const resp = await axios.get("https://react-workshop-todo.fly.dev/posts/" + id, {
      headers: {
        apiKey: `${import.meta.env.VITE_API_KEY}`
      }
    });
    setTweet(resp.data.post);
  }
  useEffect(() => {
    fetchTweets();
  }, [])

  return (
    <>
    {
      tweet ? <Tweet avatar={'https://avatars.githubusercontent.com/u/' + tweet.user.githubId + '?v=4'} name={tweet.user.fullname} username={'@' + tweet.user.name} tweet={tweet.content} image={tweet.image} key={tweet._id} /> : null
    }
    </>
  )
}

export default SingleTweet