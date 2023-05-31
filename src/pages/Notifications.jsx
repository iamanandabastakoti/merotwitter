import React from 'react'
import './Pages.css'
import Tweet from '../components/home/Tweet'

const Notifications = () => {

  const notifications = [
    {
      avatar: 'https://scontent.fbhr1-1.fna.fbcdn.net/v/t1.6435-9/95362865_2011048162372837_5244616747335548928_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4rX7OheMOlwAX8fxBxC&_nc_ht=scontent.fbhr1-1.fna&oh=00_AfA78tZiSpuZVtTqMBtMcqm6txgPBRDfd5Hge16ZxMTVyg&oe=649CE572',

      name: 'CSIT Association Of Nepal - CSITAN-Pokhara',
      
      tweet: '🎉 Exciting Announcement! 🎉 We are thrilled to announce and extend our warmest congratulations to Mr.Ananda Bastakoti and Mr. Sushanta Neupane who delivered an excellent performance at the recent 3 Days React JS Event organized by CSIT Association of Nepal- Pokhara on 5th to 7th May, 2023. Congratulations on receiving a one year free hosting package from Noditt Host ! We wish you the very best and keep up the enthusiasm to learn and grow.We request winner to message at our page or contact with any one of our executive member with proof of identity within 48 hours.' ,

      image: 'https://scontent.fbhr1-1.fna.fbcdn.net/v/t39.30808-6/346315652_9422965467745890_6975477798372039384_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_7fDOdBQD-0AX-UxfKE&_nc_ht=scontent.fbhr1-1.fna&oh=00_AfBhrEayp_H-t1d7lS5VzRcgT2KfrUW5zsRExllQPbV9uw&oe=647A4DDD',
    }
  ]

  return (
    <div className="notification-section">
      <div className="notification-title">
        <h3>Notifications</h3>
      </div>
      <div className="all-notifications">
        {
          notifications.map(({avatar, name, tweet, image}) => {
            return(
              <Tweet avatar={avatar} name={name} tweet={tweet} image={image} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Notifications