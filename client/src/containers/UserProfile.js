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
        <div className="userProfile" style={{ backgroundImage: `url(https://static.onecms.io/wp-content/uploads/sites/28/2017/07/instagram-food-MEALKIT0717.jpg)`}}>
            <div className="user">
                {user ? <h1>Welcome {user.firstname}</h1> : null}
                <h2 className="me">About Me</h2>
                {user ? <h3>{user.bio}</h3> : null}
            {showPostForm ? <PostForm setShowPostForm={setShowPostForm} setPosts={setPosts}/> : <button className="createPost" onClick={(e) => setShowPostForm(true)}>Create a Post</button>}
            <br/>
            <h2>My Posts</h2>
            </div>
            {posts ? posts.map(post => <PostTile key={post.id} post={post}/>) : null}
        </div>
    )
}

export default UserProfile