import { useState, useEffect } from 'react'
import PostTile from '../components/PostTile'

const CommunityBoard = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`/posts`)
        .then(r => r.json())
        .then(setPosts)
    }, [])
   

    return (
        <div>
            <h1>Community Board</h1>
            <ul>
                {posts.map(post => <PostTile post={post}/>)}
            </ul>
        </div>
    )
}

export default CommunityBoard