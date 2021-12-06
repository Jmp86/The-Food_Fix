import { useState, useEffect } from 'react'
import PostForm from '../components/PostForm'
import PostTile from '../components/PostTile'

const UserProfile = ({user}) => {
    const [showPostForm, setShowPostForm] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(r => r.json())
        .then(user => setPosts(user.posts))
    }, [])

    return (
        <div className="userProfile">
            {user ? <h1>Welcome {user.firstname}</h1> : null}
            <h2>About Me</h2>
            {user ? <h3>{user.bio}</h3> : null}
            {showPostForm ? <PostForm setShowPostForm={setShowPostForm} setPosts={setPosts}/> : <button className="postButton" onClick={(e) => setShowPostForm(true)}>Create a Post</button>}
            <br/>
            <h2>My Posts</h2>
            {posts ? posts.map(post => <PostTile post={post}/>) : null}
        </div>
    )
}

export default UserProfile