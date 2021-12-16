import React, { useState, useEffect } from 'react'
import PostTile from '../components/PostTile'

const CommunityBoard = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`/posts`)
        .then(r => r.json())
        .then(setPosts)
    }, [])
   
    
    return (
        <div className="community" style={{ backgroundImage: `url(https://static.wixstatic.com/media/e59570_9fcbe941ac7d4b539b1812031231825b~mv2.jpg/v1/fill/w_1000,h_668,al_c,q_90,usm_0.66_1.00_0.01/e59570_9fcbe941ac7d4b539b1812031231825b~mv2.jpg)`}}>
            <h1>Community Board</h1>
            {posts.map(post => <PostTile key={post.id} post={post}/>)}
        </div>
    )
}

export default CommunityBoard