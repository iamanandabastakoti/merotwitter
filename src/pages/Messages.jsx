import React from 'react'

const Messages = () => {

  {document.title='Mero Twitter - Messages'}
  const noMessage = () => {
    alert('This feature is not available yet!');
  }

  return (
    <div className="messages-section">
      <div className="pages-title">
        <h3>Messages</h3>
      </div>
      <div className="messages-content">
        <div className="messages-welcome">
          <h1>Welcome to your inbox!</h1>
        </div>
        <div className="messages-description-content">
          Drop a line, share Tweets and more with private conversations between you and others on Twitter.
        </div>
        <div className="arite-message-button">
          <button onClick={noMessage} className='message-button'>Write a message</button>
        </div>
      </div>
    </div>
  )
}

export default Messages