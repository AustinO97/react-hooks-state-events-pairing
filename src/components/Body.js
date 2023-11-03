import React from 'react'
import Header from './Header'

const Body = ({ video }) => {

    const commentsMap = video.comments.map((com) => {

        return (
            <div key={com.id} >
                <h2>{com.user}</h2>
                <p>{com.comment}</p>
            </div>
        )
    })

  return (
    <div>
        <Header video={video} comments={commentsMap} />
    </div>
  )
}

export default Body