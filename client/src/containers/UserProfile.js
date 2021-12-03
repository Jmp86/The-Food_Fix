import { useState, useEffect } from 'react'
import PostForm from '../components/PostForm'
import PostTile from '../components/PostTile'
import { useParams } from 'react-router-dom'

const UserProfile = (props) => {
    const [showPostForm, setShowPostForm] = useState(false)
    const [posts, setPosts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/posts/` + id)
        .then( r => r.json())
        .then(posts => setPosts(posts))
    }, [])

    return (
        <div className="userProfile">
            {props.user ? <h1>Welcome {props.user.firstname}</h1> : null}
            <h2>About Me</h2>
            {props.user ? <h3>{props.user.bio}</h3> : null}
            {showPostForm ? <PostForm setShowPostForm={setShowPostForm}/> : <button className="postButton" onClick={(e) => setShowPostForm(true)}>Create a Post</button>}
            <br/>
            <h2>My Posts</h2>
            {props.user.posts ? props.user.posts.map(post => <PostTile post={post}/>) : null}
        </div>
    )
}

export default UserProfile