import React from 'react'
import Buttons from './Buttons'


const Header = ({ video, comments }) => {

  return (
    <div>
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <Buttons video={video} comments={comments} />
    </div>
  )
}

export default Header