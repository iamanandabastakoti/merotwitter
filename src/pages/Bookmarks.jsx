import React from 'react'

const Bookmarks = () => {

  {document.title='Mero Twitter - Bookmarks'}

  return (
    <div className="bookmarks-section">
      <div className="bookmarks-title">
        <h3>Bookmarks</h3>
        <span className="bookmarks-username">
          @iamanandabastakoti
        </span>
      </div>
      <div className="bookmarks-content">
        <img className='bookmarks-image' src="https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-800x400.v1.71804389.png" alt="bookmarks" />
        <div className="bookamrks-description-header">
          <h1>Save Tweets for later</h1>
        </div>
        <div className="bookmarks-description-content">
          Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.
        </div>
      </div>
    </div>
  )
}

export default Bookmarks