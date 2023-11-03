import React, {useState} from 'react'

const Buttons = ({ video, comments }) => {
    const [upvote, setUpvote] = useState(video.upvotes)
    const [downvote, setDownvote] = useState(video.downvotes)
    const [showComments, setShowComments] = useState(null)

    const handleUpvote = () => { setUpvote(upvote + 1) }

    const handleDownvote = () => { setDownvote(downvote + 1) }

    const handleHide = () => {
        return setShowComments(!showComments)
    }

  return (
    <div>
    <button 
        onClick={handleUpvote} >
        {upvote}👍
    </button> 
    <button 
        onClick={handleDownvote} >
        {downvote}👎
    </button>
    <div>
        <button onClick={handleHide} >Hide Comments</button>
    </div>
    {showComments ? null : comments }
    </div>
  )
}

export default Buttons